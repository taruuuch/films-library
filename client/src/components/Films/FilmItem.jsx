import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Table, Icon, Confirm } from 'semantic-ui-react'

export const FilmItem = (props) => {
    const { film, handleDeleteConfirm } = props
    const [open, setOpen] = useState(false)
    const handleConfirm = () => {
        setOpen(false)
        handleDeleteConfirm(film._id)
    }
    const handleCancel = () => {
        setOpen(false)
    }

    if (open) {
        return <Confirm
            open={open}
            onCancel={handleCancel}
            onConfirm={handleConfirm}
        />
    }

    return (
        <Table.Row>
            <Table.Cell>
                <Link to={`/film/${film._id}`}>{film.title}</Link>
            </Table.Cell>
            <Table.Cell>{film.release_year}</Table.Cell>
            <Table.Cell>{film.format}</Table.Cell>
            <Table.Cell collapsing>
                <Icon name='delete' onClick={() => setOpen(true)} />
            </Table.Cell>
        </Table.Row>
    )
}