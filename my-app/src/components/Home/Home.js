import React, { Component, useState } from 'react'
import FreeScrollBar from 'react-free-scrollbar';
import { Button, ButtonGroup } from 'reactstrap';
import './Home.css'
import Nav from './nav.js'
import { BrowserRouter as Router, Route, Link, Switch, } from "react-router-dom";

export default class Thi extends Component {
    constructor() {
        super();
        this.state = {
            kithi: [],
        };
    }
    componentWillMount = () => {
        this.props.getAPI.getKiThi().then((res) => {
            this.setState({ kithi: res.data })
        });
    }
    renderKiThi = () => {
        return this.state.kithi.map((val) => {
            return <Button color="info" style={{ marginBottom: '10px' }}><Link to="/thi" style={{ color: 'white' }} onClick={() => {
                this.props.getAPI.setMaKiThi(val.MaKiThi)
            }}>{val.TenKiThi}</Link></Button>
        })
    }
    render() {
        return (
            <div>
                <div>
                    <Nav></Nav>
                </div>
                <div className='form'>
                    <div className='form12'>
                        <div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                        </div>
                    </div>
                    <div className='form21'>
                        <h2>Vào Thi</h2>
                        <FreeScrollBar>
                            <ButtonGroup vertical style={{ width: '15vw' }}>
                                {this.renderKiThi()}
                            </ButtonGroup>
                        </FreeScrollBar>
                    </div>
                </div>
            </div>

        )
    }
}