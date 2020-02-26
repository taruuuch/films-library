import React, { useState, useRef } from 'react'
import { Button, Table } from 'semantic-ui-react'
import { FilmItem } from './FilmItem'
import { Link } from 'react-router-dom'
import { CustomLoader as Loader } from '../Loader'

export const FilmList = ({ isLoading, films, onClickDelete }) => {
    const fileRef = useRef()
    const [file, setFile] = useState(null)

    const onFilmDelete = filmId => onClickDelete(filmId)

    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>#</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Release year</Table.HeaderCell>
                    <Table.HeaderCell>Format</Table.HeaderCell>
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Header>

            <Table.Body>
                { isLoading
                    ?   <Table.Row>
                            <Table.HeaderCell colSpan='5'>
                                <Loader />
                            </Table.HeaderCell>
                        </Table.Row>
                    : films && films.map((film, index) => <FilmItem key={film._id} index={index} film={film} onClickDelete={onFilmDelete} />)}
            </Table.Body>

            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell colSpan='5'>
                        <Button
                            floated='left'
                            secondary
                            size='small'
                            icon='file'
                            content='Import from .txt'
                            onClick={() => fileRef.current.click()}
                        />
                        <input
                            ref={fileRef}
                            type="file"
                            id="file"
                            hidden
                            onChange={(event) => setFile(event.target.files.item(0))}
                        />
                        <Link to='/film/new'>
                            <Button
                                primary
                                icon='film'
                                floated='right'
                                size='small'
                                content='Add Film'
                            />
                        </Link>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}