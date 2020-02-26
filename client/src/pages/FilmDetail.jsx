import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getInfo } from '../redux/film/actions'
import { Film } from '../components/FilmDetail/FilmDetail'
import { CustomLoader as Loader } from '../components/Loader'

export const FilmDetail = () => {
    const params = useParams()
    const isLoading = useSelector(state => state.film.isLoading)
    const film = useSelector(state => state.film.film)
    const dispatch = useDispatch()
    const getFilm = useCallback(() => dispatch(getInfo(params.id)), [dispatch, params.id])

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