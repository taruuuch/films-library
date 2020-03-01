import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FilmList } from '../components/Films/FilmsList'
import { SearchForm } from '../components/Search/SearchForm'
import { getFilmList, deleteFilmById, searchFilms, importFilmsFromFile } from '../redux/films/actions'

export const Films = () => {
    const dispatch = useDispatch()

    const isLoading = useSelector(state => state.films.isLoading)
    const films = useSelector(state => state.films.films)
    const page = useSelector(state => state.films.page)
    const pages = useSelector(state => state.films.pages)

    const loadFilmList = useCallback(() => dispatch(getFilmList(page)), [dispatch, page])

    const handleDeleteFilm = id => dispatch(deleteFilmById(id))
    const handleSearch = params => dispatch(searchFilms(params))
    const handleFilmsImport = file => dispatch(importFilmsFromFile(file))
    const handlePageChange = activePage => dispatch(getFilmList(activePage))

    useEffect(() => {
        loadFilmList()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <SearchForm onSearch={handleSearch} />
            <FilmList
                isLoading={isLoading}
                films={films}
                page={page}
                pages={pages}
                handleDeleteConfirm={handleDeleteFilm}
                onClickImport={handleFilmsImport}
                onPageChange={handlePageChange}
            />
        </>
    )
}