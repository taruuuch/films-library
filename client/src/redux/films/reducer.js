import { FILM_LOADING, RESET_LOADING, GET_FILMS, GET_FILM, ADD_FILM, DELETE_FILM } from './types'

const initialState = {
    isLoading: false,
    film: null,
    films: null,
    page: null,
    pages: null
}

export const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILM_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case RESET_LOADING:
            return {
                ...state,
                isLoading: false
            }
        case GET_FILMS:
            return {
                ...state,
                isLoading: false,
                films: action.payload.films,
                page: action.payload.page,
                pages: action.payload.pageCount
            }
        case GET_FILM:
            return {
                ...state,
                isLoading: false,
                film: action.film
            }
        case ADD_FILM:
            return {
                ...state,
                isLoading: false,
                film: action.film
            }
        case DELETE_FILM:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}