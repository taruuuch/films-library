import { FILMS_REQUEST, FILMS_SUCCESS, FILMS_ERROR } from './types'

const initialState = {
    isLoading: false,
    hasError: false,
    errors: null,
    films: null
}

export const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILMS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FILMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasError: false,
                errors: null,
                films: action.films
            }
        case FILMS_ERROR:
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