import axios from "axios"

export const getCars = (configurasi) => (dispatch) => {
    // console.log('Action')
    axios
        .get('https://bootcamp-rent-cars.herokuapp.com/admin/v2/car', configurasi)
        .then((res) => {
            // console.log('res', res)
            dispatch({
                type: 'GET_ALL_CARS',
                payload: res.data.cars,
        })
        .catch((err) => console.log(err))
    })
}

export const getSingleCar = () => dispatch => {
    dispatch({
        type: 'GET_SINGLE_CAR',
        payload: ''
    })
}

export const handleDelete = (id) => dispatch => {
    const token = localStorage.getItem('token')
    const config = {
        headers : {
            access_token: token,
        },
    }
    axios
        .delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config)
        .then((res) => {
            console.log(res.data.name)
            dispatch({
                type : 'DELETE',
                payload : 'berhasil',
            })
            getCars(config)
        })
        .catch((err) => console.log(err.message))
}

export const handleAddCar = (formData) => dispatch => {
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            access_token: token
        }
    }
    axios
        .post('https://bootcamp-rent-cars.herokuapp.com/admin/car',formData, config)
        .then((res) => {
            console.log(res)
            dispatch({
                type: 'ADD_NEW_CAR',
                payload: res.statusText
            })
        })
        .catch((err) => console.log(err))
}