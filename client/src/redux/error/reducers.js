import { GET_ERRORS, CLEAR_ERRORS } from './types'

const initialState = {
    msg: {},
    status: null,
    id: null
}

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ERRORS:
            return {
                ...state
            }
        case CLEAR_ERRORS:
            return {
                ...state
            }
        default:
            return state
    }
}