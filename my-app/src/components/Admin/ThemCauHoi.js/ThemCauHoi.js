import React, { Component } from 'react'
import { Button, Label, Input, FormText, Form, FormGroup } from 'reactstrap';

export default class ThemCauHoi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: ''
        }
    }
    render() {
        return (
            <div>
                <Form
                    encType="multipart/form-data"
                >
                    <FormGroup>
                        <Label for="avatar">Chọn File Excel Bạn Muốn Tải Lên</Label>
                        <Input
                            onChange={(evt) => {
                                evt.preventDefault();
                                this.setState({
                                    file: evt.target.files[0],
                                })
                            }}
                            type="file" name="avatar" id="avatar"
                            placeholder="chọn file" />
                    </FormGroup>
                    <button
                        className="btn btn-primary"
                        onClick={(evt) => {
                            evt.preventDefault()
                            if (!this.state.file) {
                                alert('Bạn chưa chọn file.')
                                return;
                            }
                            const formData = new FormData();
                            formData.append("avatar", this.state.file);
                            this.props.getAPI.getUploadFile(formData)
                        }}
                        type="button"
                    >
                        UPLOAD
    </button>
                </Form>
            </div>
        )
    }
}
