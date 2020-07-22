import React, { Component } from 'react'
import FreeScrollBar from 'react-free-scrollbar';
import { Button, Form, FormGroup, Label, Input, FormText, ButtonGroup, Container, Row, Col } from 'reactstrap';
import './Thi.css'
import Nav from './nav.js'
import update from 'react-addons-update';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Thi extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            todosPerPage: 1,
            array: [],
            selectedOption: [],
            modal: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (num) => {

        this.setState({
            currentPage: Number(num),
        });
    }
    componentWillMount = () => {
        let data = {
            MaKiThi: this.props.MaKiThi
        }
        this.props.getAPI.getCauHoi(data).then((res) => {
            this.setState({ array: res.data })
        });
        let data2 = {
            MaKiThi: this.props.MaKiThi
        }
        this.props.getAPI.taoBaiThi(data2)
    }
    onValueChange(event, ma) {
        this.setState(update(this.state, {
            selectedOption: {
                [ma]: {
                    $set: event.target.value
                }
            }
        }))
        let data = {
            DapAn: event.target.value,
            MaCH: ma
        }
        this.props.getAPI.nopBai(data)
    }
    toggle = () => {
        this.setState({ modal: !this.state.modal })
    }
    render() {

        const { currentPage, todosPerPage, array, selectedOption } = this.state;
        // Logic for displaying todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = array.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderTodos = currentTodos.map((todo) => {
            return <div>
                <FormGroup tag="fieldset">
                    <h2>{todo.De}</h2>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" value='A' checked={this.state.selectedOption[todo.MaCH] === "A"} onChange={(e) => this.onValueChange(e, todo.MaCH)} />
                            <h5>
                                {todo.A}
                            </h5>
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" value='B' checked={this.state.selectedOption[todo.MaCH] === "B"} onChange={(e) => this.onValueChange(e, todo.MaCH)} />
                            <h5>
                                {todo.B}
                            </h5>
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" value='C' checked={this.state.selectedOption[todo.MaCH] === "C"} onChange={(e) => this.onValueChange(e, todo.MaCH)} />
                            <h5>
                                {todo.C}
                            </h5>
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" value='D' checked={this.state.selectedOption[todo.MaCH] === "D"} onChange={(e) => this.onValueChange(e, todo.MaCH)} />
                            <h5>
                                {todo.D}
                            </h5>
                        </Label>
                    </FormGroup>
                </FormGroup>
            </div>
        });
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(array.length / todosPerPage); i++) {
            pageNumbers.push(i)
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <Button className='button' color="info" onClick={() => this.handleClick(number)}> Câu {number}</Button>
            );
        });

        return (
            <div>
                <div>
                    <Nav></Nav>
                </div>
                <div className='form'>
                    <div className='form12'>
                        <div>
                            <ul>
                                {renderTodos}
                            </ul>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Button onClick={() => {
                                // console.log('hung')
                                // this.props.getAPI.chamDiem().then((res) => alert('Bạn Thi Được ' + res.data + ' Điểm'))
                                this.toggle()
                            }} >Nộp Bài</Button>
                        </div>
                    </div>
                    <div className='form21'>
                        <FreeScrollBar>
                            <ButtonGroup vertical style={{ width: '15vw' }}>
                                {renderPageNumbers}
                            </ButtonGroup>
                        </FreeScrollBar>
                    </div>
                </div>
                <div>
                    <Modal isOpen={this.state.modal} toggle={() => this.toggle()} >
                        <ModalHeader toggle={() => this.toggle()}>Kết Quả</ModalHeader>
                        <ModalBody>
                            <div>
                                {`Bạn Thi Được 30 `}
                            </div>
                            <div>
                                {`Điểm của bạn đạt top 20`}
                            </div>
                            <div>
                                {` Cao hơn 20% so với điểm trung bình tất cả bài thi của Bạn`}
                            </div>
                            <div>
                                {`Kết Quả vừa thi`}
                            </div>
                            <div>
                                {`Câu 1 : Bạn chọn A || Đáp án đúng B`}
                            </div>
                            <div>
                                {`Câu 2 : Bạn chọn B || Đáp án đúng B`}
                            </div>
                            <div>
                                {`Câu 3 : Bạn chọn C || Đáp án đúng D`}
                            </div>
                            <div>
                                {`Câu 4 : Bạn chọn A || Đáp án đúng A`}
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={() => this.toggle()}>Xong</Button>{' '}
                        </ModalFooter>
                    </Modal>
                </div>

            </div >

        )
    }
}