import axios from "axios";

export const logisAction = (payload) => (dispatch) => {
    axios
        .post('https://bootcamp-rent-cars.herokuapp.com/customer/auth/login', payload)
        .then((res) => {
            // console.log(res)
            dispatch({
                type: 'LOGIN',
                payload: res.statusText,
            })
            localStorage.setItem('token', res.data.access_token)
            console.log(res.statusText)
        })
        .catch((err) => console.log(err))
}