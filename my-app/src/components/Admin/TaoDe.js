import React, { Component } from 'react'
import { Label, Button, Input, FormGroup } from 'reactstrap';

export default class TaoDe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            pickdata: '',
            sl: '',
            lch: '',
            checkbox: [],
        }
    }
    componentWillMount = () => {
        this.props.getAPI.getKiThi().then((respon) => {
            this.setState({ data: respon.data })
        })

    }
    TaoDe = () => {
        if (this.state.pickdata == '' || this.state.sl == '')
            alert('Vui Lòng Nhập Đầy Đủ Thông Tin')
        else {
            let check = parseInt(this.state.sl)
            if (!isNaN(check)) {
                let data = {
                    MAKT: this.state.pickdata,
                    SL: this.state.sl,
                    LCH: this.state.checkbox
                }
                this.props.getAPI.taoDe(data).then((response) => {
                    alert(response.data.message)
                })
            }
            else alert('Vui lòng nhập phút là số')
        }
    }
    renderKiThi = () => {
        return this.state.data.map((res) => {
            return (
                <option value={res.MaKiThi}>{res.TenKiThi}</option>
            )
        })
    }
    render() {
        return (
            <div style={{ width: '80vh', height: '10vw', padding: '20px', }}>
                <Label for="exampleEmail">Chọn Kì Thi Để Tạo Đề</Label>
                <FormGroup>
                    <Input type="select" name="select" id="exampleSelect" onChange={(e) => this.setState({ pickdata: e.target.value })}>
                        {this.renderKiThi()}
                    </Input>
                    <h3>Chọn Loại Câu Hỏi</h3>
                    <FormGroup check>
                        <div style={{ margin: '10px' }}>
                            <Input type="checkbox" onChange={(e) => {
                                if (e.target.checked)
                                    this.setState(prevState => ({
                                        checkbox: [...prevState.checkbox, 'E']
                                    }))
                            }} />Excel
                     </div>
                        <div style={{ margin: '10px' }}>
                            <Input type="checkbox" onChange={(e) => {
                                if (e.target.checked)
                                    this.setState(prevState => ({
                                        checkbox: [...prevState.checkbox, 'W']
                                    }))
                            }} />Word
                     </div>
                        <div style={{ margin: '10px' }}>
                            <Input type="checkbox" onChange={(e) => {
                                if (e.target.checked)
                                    this.setState(prevState => ({
                                        checkbox: [...prevState.checkbox, 'I']
                                    }))
                            }} />IT
                     </div>
                    </FormGroup>
                    <Label for="examplePassword">Số Lượng Câu Hỏi</Label>
                    <Input name="password" id="examplePassword" placeholder="Nhập Số Lượng Câu Hỏi" onChange={(event) => this.setState({ sl: event.target.value })} />
                </FormGroup>
                <div style={{ textAlign: 'center' }}>
                    <Button style={{ width: '40vh' }} color="primary" onClick={() => this.TaoDe()}>Tạo Đề</Button>
                </div>
            </div>
        )
    }
}
