import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch, } from "react-router-dom";

export default class ListActive extends Component {
    render() {
        return (
            <div>
                <ListGroup className='list'>
                    <ListGroupItem action onClick={() => { console.log('hung,ap') }}>Thông Tin Thí Sinh</ListGroupItem>
                    <ListGroupItem action href><Link to="/admin/lichsuthi" style={{ color: 'black' }}>Lịch Sử Thi</Link> </ListGroupItem>
                    <ListGroupItem action>Thống Kê Điểm</ListGroupItem>
                    <ListGroupItem action><Link to="/admin/taokithi" style={{ color: 'black' }}> Tạo Kì Thi</Link> </ListGroupItem>
                    <ListGroupItem action><Link to="/admin/themcauhoi" style={{ color: 'black' }}> Thêm Câu Hỏi</Link></ListGroupItem>
                    <ListGroupItem action><Link to="/admin/taode" style={{ color: 'black' }}> Tạo Đề</Link> </ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}
