import React from 'react'
import { Button, Icon, Table } from 'semantic-ui-react'
import { FilmItem } from './FilmItem'

export const FilmList = ({ films }) => {
    return (
        <Table compact celled definition>
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
                {films.map((film, index) => (
                    <FilmItem index={index} film={film} />
                ))}
            </Table.Body>

            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell colSpan='4'>
                        <Button
                            floated='right'
                            icon
                            labelPosition='left'
                            primary
                            size='small'
                        >
                            <Icon name='film' /> Add Film
                        </Button>
                        <Button
                            floated='right'
                            icon
                            labelPosition='left'
                            secondary
                            size='small'
                        >
                            <Icon name='file' /> Import from .txt
                        </Button>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}