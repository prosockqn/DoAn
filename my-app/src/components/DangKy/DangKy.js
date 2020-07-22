import React, { Component } from 'react'
import './DangKy.css'
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';

export default class DangKy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            password: '',
            confirmpass: '',
            ten: '',
            sdt: '',
            diachi: '',
            ngaysinh: '',
        }
    }
    Register = () => {
        if (this.state.id == '' || this.state.password == '' || this.state.ten == '' || this.state.sdt == '' || this.state.diachi == '' || this.state.ngaysinh == '')
            alert('Vui Lòng Nhập Đầy Đủ Thông Tin')
        else
            if (this.state.password == this.state.confirmpass) {
                let data = {
                    username: this.state.id,
                    pass: this.state.password,
                    ten: this.state.ten,
                    sdt: this.state.sdt,
                    diachi: this.state.diachi,
                    ngaysinh: this.state.ngaysinh
                }
                this.props.getAPI.getRegister(data).then((response) => {
                    alert(response.data.message)
                })
            }
            else alert('Mật khẩu xác nhận không đúng')
    }
    handleChange = (e) => {
        if (e.key == 'Enter') {
            e.preventDefault()
            this.Register()
        }
    }
    render() {
        return (
            <div id='form'>
                <Form id='form1'>
                    <div>
                        <h1 style={{ textAlign: "center" }}>Đăng Ký</h1>
                        <div className='form3'>
                            <div>
                                <Label for="exampleEmail" >Tài Khoản</Label>
                                <Input id="exampleEmail" onChange={(event) => this.setState({ id: event.target.value })}
                                    onKeyPress={this.handleChange} />
                                <Label for="examplePassword"  >Mật Khẩu</Label>
                                <Input type="password" onChange={(event) => this.setState({ password: event.target.value })}
                                    onKeyPress={this.handleChange} />
                                <Label for="examplePassword" >Xác Nhận Mật Khẩu</Label>
                                <Input type="password" onChange={(event) => this.setState({ confirmpass: event.target.value })}
                                    onKeyPress={this.handleChange} />
                                <Label  >Họ Và Tên</Label>
                                <Input onChange={(event) => this.setState({ ten: event.target.value })}
                                    onKeyPress={this.handleChange} />
                                <Label for="exampleEmail" >Số Điện Thoại</Label>
                                <Input onChange={(event) => this.setState({ sdt: event.target.value })}
                                    onKeyPress={this.handleChange} />
                                <Label for="exampleEmail" >Địa Chỉ</Label>
                                <Input name="address" onChange={(event) => this.setState({ diachi: event.target.value })}
                                    onKeyPress={this.handleChange} />
                                <Label for="exampleDate">Date</Label>
                                <Input
                                    type="date"
                                    name="date"
                                    id="exampleDate"
                                    placeholder="date placeholder"
                                    onChange={(event) => this.setState({ ngaysinh: event.target.value })}
                                />
                            </div>
                            <div style={{ textAlign: 'center', marginTop: '3vh' }}>
                                <Button className="button" color="success" onClick={() => this.Register()}>Đăng Ký</Button>
                            </div>
                        </div>
                    </div>
                </Form>
            </div >
        )
    }
}
