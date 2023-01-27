import axios from "axios";

export const loginAction = (payload) => (dispatch) => {
    axios
        .post('https://bootcamp-rent-cars.herokuapp.com/customer/auth/login', payload)
        .then((res) => {
            // console.log(res)
            localStorage.setItem('token', res.data.access_token)
            dispatch({
                type: 'LOGIN',
                payload: true,
            })
            
            // console.log(res.statusText)
            console.log(res)
        })
        .catch((err) => console.log(err))
}

export const handleLogout = (payload) => (dispatch) => {
    localStorage.removeItem('token');
    dispatch({
        type: 'LOGOUT',
        payload: false
    })
}

export const handleCheckToken = () => dispatch => {
    const token = localStorage.getItem('token')
    if (!token) {
        dispatch({
            type: 'CHECK_TOKEN',
            payload: {
                isLogin: false,
                loading: false,
            },
        })
    } else {
        dispatch({
            type: 'CHECK_TOKEN',
            payload: {
                isLogin: true,
                loading: false,
            }
        })
    }
}

