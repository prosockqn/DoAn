import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as getAPI from '../action/action'
import Home from '../components/Home/Home.js'
export class HomePageContainer extends Component {

    render() {
        return (
            <div>
                <Home getAPI={this.props.getAPI} ></Home>
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
