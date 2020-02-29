import { GET_ERRORS, CLEAR_ERRORS } from './types'

export const getErrors = (msg, status, id) => ({
    type: GET_ERRORS,
    payload
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})