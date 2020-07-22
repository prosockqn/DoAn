import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class TaoDe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tenkithi: '',
            thoigian: '',
        }
    }
    taokithi = () => {
        if (this.state.tenkithi == '' || this.state.thoigian == '')
            alert('Vui Lòng Nhập Đầy Đủ Thông Tin')
        else {
            let check = parseInt(this.state.thoigian)
            if (!isNaN(check)) {
                {
                    let data = {
                        tenKT: this.state.tenkithi,
                        thoiGianThi: this.state.thoigian,
                    }
                    this.props.getAPI.taoKiThi(data).then((response) => {
                        alert(response.data.message)
                    })
                }
                alert('hung')
            }
            else alert('Vui lòng nhập phút là số')
        }
    }
    render() {
        return (
            <div style={{ width: '80vh', height: '10vw', padding: '20px', }}>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Tên Kì Thi</Label>
                        <Input name="email" id="exampleEmail" placeholder="Nhập tên kì thi" onChange={(event) => this.setState({ tenkithi: event.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Thời Gian thi (Đơn Vị Phút)</Label>
                        <Input name="password" id="examplePassword" placeholder="Nhập Thời Gian thi (Đơn Vị Phút)" onChange={(event) => this.setState({ thoigian: event.target.value })} />
                    </FormGroup>
                    <div style={{ textAlign: 'center' }}>
                        <Button style={{ width: '40vh' }} color="primary" onClick={() => this.taokithi()}>Tạo Kì Thi</Button>
                    </div>
                </Form>
            </div>
        )
    }
}
