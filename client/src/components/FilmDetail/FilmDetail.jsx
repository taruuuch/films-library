import React from 'react'
import { Item, Label, Button } from 'semantic-ui-react'
import { history } from '../../helpers/history'

export const Film = ({ film }) => (
    <Item.Group>
        <Button
            icon='left arrow'
            labelPosition='left'
            content='Back to home'
            onClick={() => history.push('/')}
        />
        <Item>
            <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

            <Item.Content>
                <Item.Header>{film.title} ({film.release_year})</Item.Header>
                <Item.Meta>
                    <span className='cinema'><b>ID:</b> {film._id}</span>
                </Item.Meta>
                <Item.Description><b>Stars:</b> {film.stars}</Item.Description>
                <Item.Extra>
                    <Label>{film.format}</Label>
                </Item.Extra>
            </Item.Content>
        </Item>
    </Item.Group>
)