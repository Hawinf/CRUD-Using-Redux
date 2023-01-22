import axios from "axios";

export const regisAction = (payload) => (dispatch) => {
    axios
        .post('https://bootcamp-rent-cars.herokuapp.com/admin/auth/register', payload) 
        .then((res) => {
            dispatch({
                type: 'REGIS',
                payload: res.statusText,
            })
            console.log(res.statusText)
        })
        .catch((err) => console.log(err))
};

// export const removeMessage = (payload) => (dispatch) => {
//     dispatch({
//         type: 'REMOVE_MESSAGE',
//         payload: '',
//     })
// }