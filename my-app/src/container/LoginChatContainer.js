import React, { Component } from 'react'
import Axios from 'axios'
import URL from '../common/config'
import { Button, Form, Label, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as getAPI from '../action/action'
import { Redirect } from 'react-router';

export class LoginChatContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
        }
    }
    handleChange = (e) => {
        if (e.key == 'Enter') {
            e.preventDefault()
            alert("Thi Mập Ngu")
        }
    }

    getChat = () => {

        if (this.state.id !== '') {
            let data = {
                id: this.state.id
            }
            this.props.getAPI.getAPI(data)
        }
        else
            alert('Nhap day du')
    }
    render() {
        if (this.props.idToken != '') {
            return <Redirect to="/chat"></Redirect>
        }
        else
            return (
                <div id='form'>
                    <Form id='form1'>
                        <div>
                            <h3 style={{ textAlign: "center" }}>CHAT ONLINE SERVICE</h3>
                            <div>
                                <Label for="exampleEmail">Username</Label>
                                <Input id="exampleEmail" placeholder="Tên Đăng Nhập"
                                    onChange={(event) => this.setState({ id: event.target.value })}
                                    onKeyPress={this.handleChange}
                                />
                            </div>
                        </div>
                        <div id='form2'>
                            <Button style={{ backgroundColor: "#6FB554" }} className="button1" onClick={() => this.getChat()} >Vào Room Chat</Button>
                        </div>
                    </Form>
                </div>
            )
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginChatContainer)