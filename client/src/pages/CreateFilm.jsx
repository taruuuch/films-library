import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNewFilm } from '../redux/films/actions'
import { CreateFilmForm } from '../components/CreateFilm/CreateForm'
import { CustomLoader as Loader } from '../components/Loader'

export const CreateFilm = () => {
    const dispatch = useDispatch()

    const isLoading = useSelector(state => state.films.isLoading)
    const hasError = useSelector(state => state.films.hasError)
    const errors = useSelector(state => state.films.errors)

    const onSubmit = formData => dispatch(addNewFilm(formData))

    if (isLoading) {
        return <Loader />
    }

    return (
        <CreateFilmForm
            onSubmit={onSubmit}
            hasError={hasError}
            errors={errors}
            isLoading={isLoading}
        />
    )
}