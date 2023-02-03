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