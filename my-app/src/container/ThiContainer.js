import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as getAPI from '../action/action'
import Thi from '../components/Thi/Thi'
export class ThiContainer extends Component {

    render() {
        return (
            <div>
                <Thi getAPI={this.props.getAPI} MaKiThi={this.props.MaKiThi} ></Thi>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        MaKiThi: state.MaKiThi
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAPI: bindActionCreators(getAPI, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThiContainer)
