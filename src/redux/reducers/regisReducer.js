const initialState = {
    message: ''
}

const regisReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGIS':
            return {
                ...initialState,
                message: action.payload,
            };            
        case 'REMOVE_MESSAGE':
            return {
                ...initialState,
                message: action.payload
            };
        default:
            return state;
    }
}

export default regisReducer;