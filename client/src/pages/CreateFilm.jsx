import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFilm } from '../redux/film/actions'
import { CreateFilmForm } from '../components/CreateFilm/CreateForm'
import { CustomLoader as Loader } from '../components/Loader'

export const CreateFilm = () => {
    const isLoading = useSelector(state => state.film.isLoading)
    const hasError = useSelector(state => state.film.hasError)
    const errors = useSelector(state => state.film.errors)
    const dispatch = useDispatch()

    const onSubmit = (formData) => {
        const starList = []
        let tempStars = formData.stars.split(', ')
        tempStars.forEach(star => {
            starList.push({
                first_name: star.split(' ', 1).toString(),
                last_name: star.split(' ').slice(1).toString()
            })
        })
        formData.stars = starList
        dispatch(addFilm(formData))
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <CreateFilmForm
            onSubmit={onSubmit}
            hasError={hasError}
            errors={errors}
        />
    )
}