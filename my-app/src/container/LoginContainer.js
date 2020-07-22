import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as getAPI from '../action/action'
import Login from '../components/DangNhap/DangNhap.js'
export class HomePageContainer extends Component {

    render() {
        return (
            <div>
                <Login getAPI={this.props.getAPI} Login={this.props.Login}></Login>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        Login: state.Login
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAPI: bindActionCreators(getAPI, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
