import React, { Component } from 'react'
import { Button, Form, Label, Input } from 'reactstrap';
import io from 'socket.io-client'
import Axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as getAPI from '../action/action'
import { Redirect } from 'react-router';

export class ChatContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messRecive: 'Chào Mừng Bạn Đến Với Kênh Chat',
            mess: '',
            socket: '',
            authen: 'fail',
        }
    }
    handleChange = (e) => {
        if (e.key == 'Enter') {
            e.preventDefault()
            this.chat()
        }
    }
    componentWillMount = () => {
        let header = {
            authorization: this.props.Token
        }
        this.props.getAPI.loginChat(header).then((res) => {
            this.setState({ authen: res.data.message })
        })
        console.log('chattting')
        let mess = ''
        let socket = io('localhost:2000')
        this.setState({ socket: socket })
        socket.on("send", (data) => {
            console.log(this.state.messRecive)
            mess = data.mess
            this.setState({
                messRecive: this.state.messRecive + `
` + mess
            })
        })
    }
    chat = () => {
        this.setState({ mess: '' })
        this.state.socket.emit('send', { mess: this.state.mess })
    }
    render() {
        console.log(this.state.messRecive)
        if (this.state.authen != 'success') {
            return <div>
                <h1> Bạn Không Có Quyền Access Chức Năng Này  </h1>
            </div>
        }
        else {
            return (
                <div id='form'>
                    <Form id='form1'>
                        <div>
                            <h1 style={{ textAlign: "center" }}>CHAT ONLINE SERVICE</h1>
                            <div>
                                <Label for="exampleEmail">Chat</Label>
                                <Input id="exampleEmail" placeholder="Nhập Đoạn Cần Chat"
                                    onChange={(event) => this.setState({ mess: event.target.value })}
                                    onKeyPress={this.handleChange}
                                    value={this.state.mess}
                                />
                            </div>
                            <div id='form2'>
                                <Button style={{ backgroundColor: "#6FB554" }} className="button1" onClick={() => this.chat()} >Gửi</Button>
                            </div>
                            <div>
                                <Label for="examplePassword">Chatting</Label>
                                <div>
                                    <textarea rows="8" cols="70" disabled value={this.state.messRecive}>
                                        {this.state.mess}
                                    </textarea>
                                </div>
                            </div>
                        </div>

                    </Form>
                </div >
            )
        }

    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        Token: state.Token,
        idToken: state.idToken
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAPI: bindActionCreators(getAPI, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)