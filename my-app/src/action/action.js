import Axios from 'axios'
import * as types from '../common/action.type'
import URL from '../common/config'


// config action redux



const proxyurl = "https://cors-anywhere.herokuapp.com/";

//loginadmin
export const getLogin = (data) => {
    return function (dispatch) {
        return Axios.post(URL + "login", data)
            .then(function (response) {
                dispatch({ type: types.GET_LOGIN, Login: response.data.message })
            })
            .catch(() => console.log("Can’t access " + URL + " response. Blocked by browser?"))
    }
}
//

//setMaKiThi
export const setMaKiThi = (data) => {
    return function (dispatch) {
        dispatch({ type: types.GET_MAKT, MaKiThi: data })
    }
}
//

//loginuser
export const getLoginUser = (data) => {
    return function (dispatch) {
        return Axios.post(URL + "loginUser", data)
            .catch(() => console.log("Can’t access " + URL + " response. Blocked by browser?"))
    }
}

//


//setSession
export const setSession = (data) => {
    return function (dispatch) {
        return Axios.post(URL + "set_sess", data)
            .catch(() => console.log("Can’t access " + URL + " response. Blocked by browser?"))
    }
}
//

//registeruser
export const getRegister = (data) => {
    return function (dispatch) {
        return Axios.post(URL + "register", data)
            .catch(() => console.log("Can’t access " + URL + " response. Blocked by browser?"))
    }
}
//



//upload file
const config = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}
export const getUploadFile = (data) => {
    return function (dispatch) {
        return Axios.post(URL + "uploadFile", data, config)
            .then(function (res) {
            })
    }
}
//
//get CauHoi
export const getCauHoi = (data) => {
    return function (dispatch) {
        return Axios.post(URL + "getCauHoi", data)
            .catch(() => console.log("Can’t access " + URL + " response. Blocked by browser?"))
    }
}
//

//Tạo Kì Thi
export const taoKiThi = (data) => {
    return function (dispatch) {
        return Axios.post(URL + "createKiThi", data)
            .catch(() => console.log("Can’t access " + URL + " response. Blocked by browser?"))
    }
}
//
//get KiThi
export const getKiThi = () => {
    return function (dispatch) {
        return Axios.post(URL + "getKiThi")
            .catch(() => console.log("Can’t access " + URL + " response. Blocked by browser?"))
    }
}
//
//Tạo Đề Thi
export const taoDe = (data) => {
    return function (dispatch) {
        return Axios.post(URL + "createDe", data)
            .catch(() => console.log("Can’t access " + URL + " response. Blocked by browser?"))
    }
}
//
//Nộp Bài
export const nopBai = (data) => {
    return function (dispatch) {
        return Axios.post(URL + "nopBai", data)
            .catch(() => console.log("Can’t access " + URL + " response. Blocked by browser?"))
    }
}
//
//Tao Bai Thi
export const taoBaiThi = (data) => {
    return function (dispatch) {
        return Axios.post(URL + "taoBaiThi", data)
            .catch(() => console.log("Can’t access " + URL + " response. Blocked by browser?"))
    }
}
//
//Chấm Điểm
export const chamDiem = (data) => {
    return function (dispatch) {
        return Axios.post(URL + "chamDiem", data)
            .catch(() => console.log("Can’t access " + URL + " response. Blocked by browser?"))
    }
}
//

//chat real time 
export const getAPI = (data) => {
    return async function (dispatch) {
        console.log('hung')
        return Axios.post(URL + "users/login")
            .then((response) => {
                dispatch({ type: types.GET_TOKEN, Token: response.data, idToken: data.id })
            })
            .catch(() => console.log("Can’t access " + URL + " response. Blocked by browser?"))
    }
}
//

//loginChat

export const loginChat = (header) => {
    return async function (dispatch) {
        const config = {
            headers: header
        }
        return Axios.post('http://localhost:4000/users/loginToChat', {}, config)
            .catch((res) => console.log(res))
    }
}
//