import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFilm } from '../redux/film/actions'
import { CreateFilmForm } from '../components/CreateFilm/CreateForm'
import { CustomLoader as Loader } from '../components/Loader'

export const CreateFilm = () => {
    const isLoading = useSelector(state => state.film.isLoading)
    // const hasError = useSelector(state => state.film.hasError)
    // const errors = useSelector(state => state.film.errors)
    const dispatch = useDispatch()

    const onSubmit = (formData) => {
        dispatch(addFilm(formData))
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <CreateFilmForm onSubmit={onSubmit} />
    )
}