import { FILM_LOADING, RESET_LOADING, GET_FILMS, GET_FILM, ADD_FILM, DELETE_FILM } from './types'
import { getErrors, getSuccess } from '../message/actions'
import { filmProvider } from '../../providers/film.provider'
import { history } from '../../helpers/history'

const filmLoading = () => ({
    type: FILM_LOADING
})

const getFilms = payload => ({
    type: GET_FILMS,
    payload
})

const getFilm = film => ({
    type: GET_FILM,
    film
})

const addFilm = film => ({
    type: ADD_FILM,
    film
})

const deleteFilm = () => ({
    type: DELETE_FILM
})

const resetLoading = () => ({
    type: RESET_LOADING
})

export const getFilmList = page => dispatch => {
    dispatch(filmLoading())

    filmProvider.get(page)
        .then(response => {
            dispatch(getFilms(response.data))
        })
        .catch(error => {
            dispatch(getErrors(error.response.data))
        })
}

export const searchFilms = params => dispatch => {
    dispatch(filmLoading())

    filmProvider.search(params)
        .then(response => {
            dispatch(getFilms(response.data))
        })
        .catch(error => {
            dispatch(getErrors(error.response.data))
        })
}

export const getFilmInfo = id => dispatch => {
    dispatch(filmLoading())

    filmProvider.getInfo(id)
        .then(response => {
            dispatch(getFilm(response.data))
        })
        .catch(error => {
            dispatch(getErrors(error.response.data))
        })
}

export const addNewFilm = film => dispatch => {
    dispatch(filmLoading())

    filmProvider.add(film)
        .then(response => {
            dispatch(addFilm(response.data.film))
            dispatch(getSuccess(response.data.message))
            history.push(`/film/${response.data.film._id}`)
        })
        .catch(error => {
            dispatch(resetLoading())
            dispatch(getErrors(error.response.data))
        })
}

export const importFilmsFromFile = file => dispatch => {
    dispatch(filmLoading())

    filmProvider.import(file)
        .then(response => {
            dispatch(getFilms(response.data.films))
            dispatch(getSuccess(response.data.message))
        })
        .catch(error => {
            dispatch(getErrors(error.response.data))
        })
}

export const deleteFilmById = id => dispatch => {
    dispatch(filmLoading())

    filmProvider.delete(id)
        .then(response => {
            dispatch(deleteFilm())
            dispatch(getFilms(response.data.films))
            dispatch(getSuccess(response.data.message))
        })
        .catch(error => {
            dispatch(getErrors(error.response.data))
        })
}