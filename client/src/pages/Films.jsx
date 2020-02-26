import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FilmList } from '../components/Films/FilmsList'
import { getFilms, deleteFilm } from '../redux/films/actions'

export const Films = () => {
    const isLoading = useSelector(state => state.films.isLoading)
    const films = useSelector(state => state.films.films)
    const dispatch = useDispatch()
    const loadFilms = useCallback(() => dispatch(getFilms()), [dispatch])

    useEffect(() => {
        loadFilms()
    }, [loadFilms])


    const onClickDeleteFilm = id => {
        dispatch(deleteFilm(id))
    }

    return (
        <FilmList isLoading={isLoading} films={films} onClickDelete={onClickDeleteFilm} />
    )
}