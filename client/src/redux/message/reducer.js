import { GET_ERRORS, GET_SUCCESS, CLEAR_ERRORS } from './types'

const initialState = {
    hasSuccess: false,
    hasError: false,
    status: null,
    msg: {}
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ERRORS:
            return {
                ...state,
                hasError: true,
                hasSuccess: false,
                msg: action.payload.msg
            }
        case GET_SUCCESS:
            return {
                ...state,
                hasError: false,
                hasSuccess: true,
                msg: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...initialState
            }
        default:
            return state
    }
}