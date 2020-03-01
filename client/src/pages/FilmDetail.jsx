import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getFilmInfo } from '../redux/films/actions'
import { Film } from '../components/FilmDetail/FilmDetail'
import { CustomLoader as Loader } from '../components/Loader'

export const FilmDetail = () => {
    const params = useParams()
    const dispatch = useDispatch()

    const isLoading = useSelector(state => state.films.isLoading)
    const film = useSelector(state => state.films.film)

    const getFilm = useCallback(() => dispatch(getFilmInfo(params.id)), [dispatch, params.id])

    useEffect(() => {
        getFilm()
    }, [getFilm])

    if (isLoading) {
        return <Loader />
    }

    return (
        <>
            {film && <Film film={film} />}
        </>
    )
}