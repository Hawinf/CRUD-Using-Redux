import { Action } from "@remix-run/router"

const inisialState = {
    message: false
}

const loginReducer = (state = inisialState, Action) => {
    switch (Action.type) {
        case 'LOGIN':
            return {
                ...inisialState,
                message: Action.payload
            };
        case 'LOGOUT':
            return {
                ...inisialState,
                message: Action.payload
            }
            default:
                return state;
    }
}

export default loginReducer;