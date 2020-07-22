import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
} from 'reactstrap';
export default class nav extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">THI TRẮC NGHIỆM ONLINE</NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="mr-auto" navbar>

                        </Nav>
                        <NavbarBrand href="/">ĐĂNG XUẤT</NavbarBrand>
                        <NavbarToggler />
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
