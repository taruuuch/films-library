import React, { useState } from 'react'
import {
    Button,
    Form,
    Input,
    Radio,
    TextArea,
    Message
} from 'semantic-ui-react'

export const CreateFilmForm = ({ onSubmit }) => {
    const [form, setForm] = useState({
        title: '',
        release_year: null,
        format: '',
        stars: ''
    })

    const handleChangeFormat = (event, { value }) => setForm({
        ...form,
        format: value
    })

    const handleChange = event => setForm({
        ...form,
        [event.target.name]: event.target.value
    })

    const onSubmitForm = event => {
        event.preventDefault()
        onSubmit(form)
    }

    return (
        <Form onSubmit={onSubmitForm}>
            {/* {hasError && <Message
                error
                header='Could you check something!'
                list={errors}
            />} */}
            <Form.Group>
                <Form.Input
                    width={13}
                    control={Input}
                    label='Title'
                    placeholder='Title...'
                    name='title'
                    onChange={handleChange}
                />
                <Form.Input
                    width={3}
                    control={Input}
                    label='Release year'
                    placeholder='Release year...'
                    name='release_year'
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group inline>
                <label>Format</label>
                <Form.Field
                    control={Radio}
                    label='VHS'
                    value='VHS'
                    checked={form.format === 'VHS'}
                    onChange={handleChangeFormat}
                />
                <Form.Field
                    control={Radio}
                    label='DVD'
                    value='DVD'
                    checked={form.format === 'DVD'}
                    onChange={handleChangeFormat}
                />
                <Form.Field
                    control={Radio}
                    label='Blu-Ray'
                    value='Blu-Ray'
                    checked={form.format === 'Blu-Ray'}
                    onChange={handleChangeFormat}
                />
            </Form.Group>
            <Form.Field
                control={TextArea}
                label='Stars'
                placeholder='Stars (e.g: Jacky Chan, Tonny Montana,...)'
                name='stars'
                onChange={handleChange}
            />
            <Form.Field control={Button}>Save film</Form.Field>
        </Form>
    )
}