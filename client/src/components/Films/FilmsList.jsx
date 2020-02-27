import React, { useRef } from 'react'
import { Button, Table } from 'semantic-ui-react'
import { FilmItem } from './FilmItem'
import { Link } from 'react-router-dom'
import { CustomLoader as Loader } from '../Loader'
import { FilmsPagination } from './FilmsPagination'

export const FilmList = (props) => {
    const { isLoading, films, pages, onClickDelete } = props
    const fileRef = useRef()

    const onFilmDelete = filmId => onClickDelete(filmId)

    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Release year</Table.HeaderCell>
                    <Table.HeaderCell>Format</Table.HeaderCell>
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Header>

            <Table.Body>
                { isLoading
                    ?   <Table.Row>
                            <Table.HeaderCell colSpan='4'>
                                <Loader />
                            </Table.HeaderCell>
                        </Table.Row>
                    : (films && films.length !== 0 )
                        ? films.map((film, index) => <FilmItem key={film._id} film={film} onClickDelete={onFilmDelete} />)
                        :   <Table.Row>
                                <Table.HeaderCell
                                    colSpan='4'
                                    textAlign='center'
                                    style={{ paddingTop: 15, paddingBottom: 15 }}
                                >
                                    No films found!
                                </Table.HeaderCell>
                            </Table.Row>
                }
            </Table.Body>

            <Table.Footer fullWidth>
                {(!isLoading && pages > 1) &&
                    <Table.Row key="pagination">
                        <Table.HeaderCell
                            colSpan='4'
                            textAlign='center'
                        >
                            <FilmsPagination
                                activePage={props.page}
                                totalPages={pages}
                                onPageChange={props.onPageChange}
                            />
                        </Table.HeaderCell>
                    </Table.Row>
                }
                <Table.Row>
                    <Table.HeaderCell colSpan='4'>
                        <Button
                            floated='left'
                            secondary
                            size='small'
                            icon='file'
                            labelPosition='left'
                            content='Import from .txt'
                            onClick={() => fileRef.current.click()}
                        />
                        <input
                            ref={fileRef}
                            type="file"
                            accept=".txt"
                            id="file"
                            hidden
                            onChange={(event) => props.onClickImport(event.target.files.item(0))}
                        />
                        <Link to='/film/new'>
                            <Button
                                primary
                                icon='film'
                                labelPosition='left'
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