import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FilmList } from '../components/Films/FilmsList'
import { SearchForm } from '../components/Search/SearchForm'
import { getFilms, deleteFilm, searchFilms, importFilms } from '../redux/films/actions'

export const Films = () => {
    const isLoading = useSelector(state => state.films.isLoading)
    const films = useSelector(state => state.films.films)
    const page = useSelector(state => state.films.page)
    const pages = useSelector(state => state.films.pages)
    const dispatch = useDispatch()
    const loadFilms = useCallback(() => dispatch(getFilms(page)), [dispatch, page])

    useEffect(() => {
        loadFilms()
    }, [])


    const onClickDeleteFilm = id => {
        dispatch(deleteFilm(id))
    }

    const onClickSearch = params => {
        dispatch(searchFilms(params))
    }

    const onClickFilmsImport = file => {
        dispatch(importFilms(file))
    }

    const onPageChange = activePage => {
        dispatch(getFilms(activePage))
    }

    return (
        <>
            <SearchForm onSearch={onClickSearch} />
            <FilmList
                isLoading={isLoading}
                films={films}
                page={page}
                pages={pages}
                onClickDelete={onClickDeleteFilm}
                onClickImport={onClickFilmsImport}
                onPageChange={onPageChange}
            />
        </>
    )
}