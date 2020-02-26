import React from 'react'
import { Button, Icon, Table } from 'semantic-ui-react'
import { FilmItem } from './FilmItem'
import { Link } from 'react-router-dom'
import { CustomLoader as Loader } from '../Loader'

export const FilmList = ({ isLoading, films }) => {
    return (
        <Table compact celled definition>
            {isLoading || <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>#</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Release year</Table.HeaderCell>
                    <Table.HeaderCell>Format</Table.HeaderCell>
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Header>}

            <Table.Body>
                {isLoading
                    ?   <Table.Row>
                            <Table.HeaderCell colSpan='5'>
                                <Loader />
                            </Table.HeaderCell>
                        </Table.Row>
                    : films.map((film, index) => (
                        <FilmItem index={index} film={film} />
                    ))
                }
            </Table.Body>

            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell colSpan='5'>
                        <Button
                            floated='left'
                            icon
                            labelPosition='left'
                            secondary
                            size='small'
                        >
                            <Icon name='file' /> Import from .txt
                        </Button>
                        <Link to='/film/new'>
                            <Button
                                floated='right'
                                icon
                                labelPosition='left'
                                primary
                                size='small'
                            >
                                <Icon name='film' /> Add Film
                            </Button>
                        </Link>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}