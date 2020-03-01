import React, { useState } from 'react'
import { Button, Form, Input, Radio, TextArea } from 'semantic-ui-react'
import { history } from '../../helpers/history'

export const CreateFilmForm = (props) => {
    const { onSubmit, hasError, isLoading } = props
    const [form, setForm] = useState({
        title: '',
        release_year: Number(),
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
        <Form error={hasError}>
            <Button
                icon='left arrow'
                labelPosition='left'
                content='Back to home'
                style={{ marginBottom: 15 }}
                onClick={() => history.push('/')}
            />
            <Form.Field
                required
                control={Input}
                label='Title'
                placeholder='Title...'
                name='title'
                onChange={handleChange}
            />
            <Form.Input
                required
                width={4}
                control={Input}
                label='Release year'
                placeholder='Release year...'
                name='release_year'
                onChange={handleChange}
            />
            <Form.Group inline >
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
                required
                control={TextArea}
                label='Stars'
                placeholder='Stars (e.g: Jacky Chan, Tonny Montana...)'
                name='stars'
                onChange={handleChange}
            />
            <Form.Field
                disabled={isLoading}
                required
                primary
                control={Button}
                floated='right'
                icon='save'
                labelPosition='left'
                content='Save film'
                onClick={onSubmitForm}
            />
        </Form>
    )
}