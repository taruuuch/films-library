import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FilmList } from '../components/Films/FilmsList'
import { SearchForm } from '../components/Search/SearchForm'
import { MessageBox } from '../components/MessageBox'
import { getFilms, deleteFilm, searchFilms, importFilms } from '../redux/films/actions'

export const Films = () => {
    const hasError = true
    const isLoading = useSelector(state => state.films.isLoading)
    const films = useSelector(state => state.films.films)
    const page = useSelector(state => state.films.page)
    const pages = useSelector(state => state.films.pages)
    const dispatch = useDispatch()
    const loadFilms = useCallback(() => dispatch(getFilms(page)), [dispatch, page])

    useEffect(() => {
        loadFilms()
        // eslint-disable-next-line
    }, [])


    const handleDeleteFilm = id => {
        dispatch(deleteFilm(id))
    }

    const handleSearch = params => {
        dispatch(searchFilms(params))
    }

    const handleFilmsImport = file => {
        dispatch(importFilms(file))
    }

    const handlePageChange = activePage => {
        dispatch(getFilms(activePage))
    }

    return (
        <>
            {hasError &&
                <MessageBox
                    hasError={hasError}
                    header={'Kuku'}
                    errors={['1', '2']}
                />
            }
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