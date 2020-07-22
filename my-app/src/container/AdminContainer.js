import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as getAPI from '../action/action'
import Admin from '../components/Admin/AdminPage.js'
export class AdminContainer extends Component {
    render() {
        return (
            <div>
                <Admin getAPI={this.props.getAPI}></Admin>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)
