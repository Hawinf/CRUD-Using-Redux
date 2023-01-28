import axios from "axios"

export const getCars = (configurasi) => (dispatch) => {
    console.log('Action')
    axios
        .get('https://bootcamp-rent-cars.herokuapp.com/admin/v2/car', configurasi)
        .then((res) => {
            console.log(res)
            dispatch({
                type: 'GET_ALL_CARS',
                payload: res.data.cars,
        })
        .catch((err) => console.log(err.message))
    })
}

export const getSingleCar = () => dispatch => {
    dispatch({
        type: 'GET_SINGLE_CAR',
        payload: ''
    })
}