import { FILMS_REQUEST, FILMS_SUCCESS, FILMS_ERROR } from './types'
import { filmProvider } from '../../providers/film.provider'

export const getFilms = (page) => dispatch => {
    dispatch(filmsRequest())

    filmProvider.get(page)
        .then(response => {
            dispatch(filmsSuccess(response.data))
        })
        .catch(error => {
            dispatch(filmsError(error))
        })
}

export const searchFilms = (params) => dispatch => {
    dispatch(filmsRequest())

    filmProvider.search(params)
        .then(response => {
            dispatch(filmsSuccess(response.data))
        })
        .catch(error => {
            dispatch(filmsError(error))
        })
}

export const deleteFilm = (id) => dispatch => {
    dispatch(filmsRequest())

    filmProvider.delete(id)
        .then(response => {
            dispatch(filmsSuccess(response.data.films))
        })
        .catch(error => {
            dispatch(filmsError(error))
        })
}

export const importFilms = (file) => dispatch => {
    dispatch(filmsRequest())

    filmProvider.import(file)
        .then(response => {
            dispatch(filmsSuccess(response.data.films))
        })
        .catch(error => {
            dispatch(filmsError(error))
        })
}

const filmsRequest = () => ({
    type: FILMS_REQUEST
})

const filmsSuccess = (payload) => ({
    type: FILMS_SUCCESS,
    payload
})

const filmsError = (errors) => ({
    type: FILMS_ERROR,
    errors
})