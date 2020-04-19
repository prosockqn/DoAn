import Axios from 'axios'
import * as types from '../common/action.type'
import URL from '../common/config'


// config action redux





export const getListKhuVuc = () => {
    return function (dispatch) {
        Axios.get(URL + "getListKhuVuc")
            .then(function (response) {
                dispatch({ type: types.GET_LIST_KHU_VUC, khuVuc: response.data })
            })
    }
}

export const getListNganh = () => {
    return function (dispatch) {
        Axios.get(URL + "getListNganh")
            .then(function (response) {
                dispatch({ type: types.GET_LIST_NGANH, nganh: response.data })
            })
    }
}

export const timTruong = (data) => {
    console.log(data)
    return function (dispatch) {
        Axios.post(URL + "searchTenTruong", data)
            .then(function (response) {
                dispatch({ type: types.TIM_TRUONG, danhSachTruong: response.data })
            })
    }
}

export const tuVan = (data) => {
    console.log(data)
    return function (dispatch) {
        Axios.post(URL + "searchListTruong", data)
            .then(function (response) {
                dispatch({ type: types.TU_VAN, danhSachTuVan: response.data })
            })
    }
}

export const topTruong = () => {
    return function (dispatch) {
        Axios.get(URL + "searchDanhGia")
            .then(function (response) {
                dispatch({ type: types.TOP_TRUONG, topTruong: response.data })
            })
    }
}

