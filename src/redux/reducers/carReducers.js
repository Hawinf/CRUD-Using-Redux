import { Action } from "@remix-run/router"

const initialState = {
    carsData : [],
    carData : {},
    message: '',
}

const carReducers = (state = initialState, Action) => {
    switch (Action.type) {
        case 'GET_ALL_CARS':
            return {
                ...initialState,
                carsData : Action.payload
            }
        case 'GET_SINGLE_CAR':
            return {
                ...initialState,
                carData : Action.payload
            }
        case 'DELETE':
            return {
                ...initialState,
                message: Action.payload
            }
        case 'ADD_NEW_CAR':
            return {
                ...initialState,
                message: Action.payload
            }
        default:
            return state
    }
}
export default carReducers