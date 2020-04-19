import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as types from '../common/action.type'

// config Redux Store







const reducerInitialState = {
    khuVuc: [],
    danhSachTruong: [],
    infoTruong: {},
    nganh: [],
    danhSachTuVan: [],
    nganh: [],
    infoTruong: {},
    topTruong: []

}
const reducer = (state = reducerInitialState, action) => {
    switch (action.type) {
        case types.GET_LIST_KHU_VUC:
            return { ...state, khuVuc: action.khuVuc }
        case types.GET_LIST_NGANH:
            return { ...state, nganh: action.nganh }
        case types.GET_LIST_NGANH:
            return { ...state, nganh: action.nganh }
        case types.TIM_TRUONG:
            return { ...state, danhSachTruong: action.danhSachTruong }
        case types.TU_VAN:
            return { ...state, danhSachTuVan: action.danhSachTuVan }
        case types.TOP_TRUONG:
            return {...state, topTruong: action.topTruong}
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store