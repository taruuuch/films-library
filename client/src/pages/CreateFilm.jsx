import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNewFilm } from '../redux/films/actions'
import { CreateFilmForm } from '../components/CreateFilm/CreateForm'

export const CreateFilm = () => {
    const dispatch = useDispatch()

    const isLoading = useSelector(state => state.films.isLoading)
    const hasError = useSelector(state => state.message.hasError)

    const onSubmit = formData => dispatch(addNewFilm(formData))

    return (
        <CreateFilmForm
            hasError={hasError}
            isLoading={isLoading}
            onSubmit={onSubmit}
        />
    )
}