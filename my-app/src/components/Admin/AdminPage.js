import React, { Component } from 'react'
import Nav from './nav.js'
import List from './ListActive'
import './Admin.css'
import ThemCauHoi from './ThemCauHoi.js/ThemCauHoi'
import LichSuThi from './LichSuThi/LichSuThi'
import TaoKiThi from './TaoKiThi'
import TaoDe from './TaoDe'
import { BrowserRouter as Router, Route, Link, Switch, } from "react-router-dom";

export default class AdminPage extends Component {
    render() {
        return (
            <div className='form1'>
                <Nav></Nav>
                <div className='form2'>
                    <List></List>
                    <div className='frame'>
                        <Switch>
                            <Route path="/admin/lichsuthi" component={LichSuThi} />
                            <Route path="/admin/thongtinthisinh" component={ThemCauHoi} />
                            <Route path="/admin/themcauhoi" component={() => { return (<ThemCauHoi getAPI={this.props.getAPI}></ThemCauHoi>) }} />
                            <Route path="/admin/taokithi" component={() => { return (<TaoKiThi getAPI={this.props.getAPI}></TaoKiThi>) }} />
                            <Route path="/admin/taode" component={() => { return (<TaoDe getAPI={this.props.getAPI}></TaoDe>) }} />

                            <Route exact="/admin" component={() => { return (<h1 style={{ textAlign: "center" }}>Chào Mừng Bạn Đến Với Trang Admin</h1>) }} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
