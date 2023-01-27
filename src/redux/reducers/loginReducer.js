import { Action } from "@remix-run/router"

const inisialState = {
    message: false,
    isLogin: false,
    loading: true,
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
        case 'CHECK_TOKEN':
            return {
                ...inisialState,
                isLogin: Action.payload.isLogin,
                loading: Action.payload.loading,
            }
            default:
                return state;
    }
}

export default loginReducer;