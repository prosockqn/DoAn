import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as getAPI from '../action/action'
import DangKy from '../components/DangKy/DangKy'
export class HomePageContainer extends Component {

    render() {
        return (
            <div>
                <DangKy getAPI={this.props.getAPI}></DangKy>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAPI: bindActionCreators(getAPI, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
