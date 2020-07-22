import React, { Component } from 'react'
import './DangNhap.css'
import { Button, Form, FormGroup, Label, Input, FormText, ButtonGroup, Container, Row, Col, Alert } from 'reactstrap';
import history from '../../common/history'
import { Redirect } from 'react-router';
import Dangky from '../DangKy/DangKy.js'
export default class DangNhap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            password: '',
            login: ''
        }

    }
    Login = (id, passw) => {
        let data = {
            username: id,
            pass: passw
        }
        this.props.getAPI.getLogin(data).then(() => {
            if (this.props.Login != 'Success') {
                // history.push("/admin")
                // window.location.reload();
                alert('Sai tài khoản hoặc mật khẩu')
            }
        })
    }
    LoginUser = (id, passw) => {
        let data = {
            username: id,
            pass: passw
        }
        this.props.getAPI.getLoginUser(data).then((res) => {
            if (res.data.message != 'Success') {
                // history.push("/admin")
                // window.location.reload();
                alert(res.data.message)
            }
            else {
                // this.props.getAPI.setSession(data)
                this.setState({ login: 'Success' })
            }
        })
    }
    handleChange = (e) => {
        if (e.key == 'Enter') {
            e.preventDefault()
            alert("Thi Mập Ngu")
        }
    }
    render() {
        if (this.props.Login == 'Success') {
            // history.push("/admin")
            // window.location.reload();
            return <Redirect to="/admin"></Redirect>
        }
        else if (this.state.login == 'Success') {
            return <Redirect to="/home"></Redirect>
        }
        else
            return (
                <div id='form'>
                    <Form id='form1'>
                        <div>
                            <h1 style={{ textAlign: "center" }}>Đăng Nhập</h1>
                            <div>
                                <Label for="exampleEmail">Username</Label>
                                <Input id="exampleEmail" placeholder="Tên Đăng Nhập"
                                    onChange={(event) => this.setState({ id: event.target.value })}
                                    onKeyPress={this.handleChange}

                                />
                            </div>
                            <div>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" id="examplePassword" placeholder="Mật Khẩu"
                                    onChange={(event) => this.setState({ password: event.target.value })}
                                    onKeyPress={this.handleChange}
                                />
                            </div>
                        </div>
                        <div id='form2'>
                            <Button style={{ backgroundColor: "#6FB554" }} className="button1" href="/dangky">Đăng Ký</Button>
                            <Button id='button12' className="button1" onClick={() => this.LoginUser(this.state.id, this.state.password)} >Đăng Nhập</Button>
                            <Button style={{ backgroundColor: "#6AC2F0" }} className="button1"
                                onClick={() => this.Login(this.state.id, this.state.password)}>Đăng Nhập Quyền Admin</Button>
                        </div>
                    </Form>
                </div >
            )
    }
}
