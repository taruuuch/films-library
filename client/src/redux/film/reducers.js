import { FILM_REQUEST, FILM_SUCCESS, FILM_ERROR } from './types'

const initialState = {
    isLoading: false,
    hasError: false,
    errors: null,
    film: null
}

export const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILM_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FILM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasError: false,
                errors: null,
                film: action.film
            }
        case FILM_ERROR:
            return {
                ...state,
                isLoading: false,
                hasError: true,
                errors: action.errors
            }
        default:
            return state
    }
}