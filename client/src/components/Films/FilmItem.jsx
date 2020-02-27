import React from 'react'
import { Table, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const FilmItem = ({ film, onClickDelete }) => (
    <Table.Row>
        <Table.Cell>
            <Link to={`/film/${film._id}`}>{film.title}</Link>
        </Table.Cell>
        <Table.Cell>{film.release_year}</Table.Cell>
        <Table.Cell>{film.format}</Table.Cell>
        <Table.Cell collapsing>
            <Icon name='delete' onClick={() => onClickDelete(film._id)} />
        </Table.Cell>
    </Table.Row>
)