import { GET_ERRORS, GET_SUCCESS, CLEAR_ERRORS } from './types'

export const getErrors = (msg, status, id) => ({
    type: GET_ERRORS,
    payload: { msg, status, id }
})

export const getSuccess = msg => ({
    type: GET_SUCCESS,
    payload: msg
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})