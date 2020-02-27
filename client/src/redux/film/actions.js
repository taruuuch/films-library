import { FILM_REQUEST, FILM_SUCCESS, FILM_ERROR } from './types'
import { filmProvider } from '../../providers/film.provider'
import { history } from '../../helpers/history'

export const getInfo = (id) => dispatch => {
    dispatch(filmRequest())

    filmProvider.getInfo(id)
        .then(response => {
            dispatch(filmSuccess(response.data))
        })
        .catch(error => {
            dispatch(filmError(error.response.data.message))
        })
}

export const addFilm = (film) => dispatch => {
    dispatch(filmRequest())

    filmProvider.add(film)
        .then(response => {
            dispatch(filmSuccess(response.data))
            history.push(`/film/${response.data._id}`)
        })
        .catch(error => {
            dispatch(filmError(error.response.data.errors))
        })
}

const filmRequest = () => ({
    type: FILM_REQUEST
})

const filmSuccess = (film) => ({
    type: FILM_SUCCESS,
    film
})

const filmError = (errors) => ({
    type: FILM_ERROR,
    errors
})