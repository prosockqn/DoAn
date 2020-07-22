import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as types from '../common/action.type'

// config Redux Store

const reducerInitialState = {
    Login: 'fail',
    MaKiThi: '',
    Token: '',
    idToken: ''
}
const reducer = (state = reducerInitialState, action) => {
    switch (action.type) {
        case types.GET_LOGIN:
            return { ...state, Login: action.Login }
        case types.GET_MAKT:
            return { ...state, MaKiThi: action.MaKiThi }
        case types.GET_TOKEN:
            return { ...state, Token: action.Token, idToken: action.idToken }
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store