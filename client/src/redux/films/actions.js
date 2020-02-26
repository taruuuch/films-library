import { FILMS_REQUEST, FILMS_SUCCESS, FILMS_ERROR } from './types'
import { filmProvider } from '../../providers/film.provider'

export const getFilms = () => dispatch => {
    dispatch(filmsRequest())

    filmProvider.get()
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

const filmsRequest = () => ({
    type: FILMS_REQUEST
})

const filmsSuccess = (films) => ({
    type: FILMS_SUCCESS,
    films
})

const filmsError = (errors) => ({
    type: FILMS_ERROR,
    errors
})