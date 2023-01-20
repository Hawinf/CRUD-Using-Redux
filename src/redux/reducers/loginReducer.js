import { Action } from "@remix-run/router"

const inisialState = {
    isLogin: false
}

const loginReducer = (state = inisialState, Action) => {
    switch (Action.type) {
        case 'LOGIN':
            return {
                ...inisialState,
                isLogin: Action.payload
            };
            default:
                return state;
    }
}

export default loginReducer;