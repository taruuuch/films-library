import React from 'react'
import { Item, Label, Button, List } from 'semantic-ui-react'
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
                <Item.Extra>
                    <Label>{film.format}</Label>
                </Item.Extra>
                <Item.Description>
                    <b>Stars:</b>
                    <List bulleted>
                        {film.stars.map(star => <List.Item>{star.first_name + ' ' + star.last_name}</List.Item>)}
                    </List>
                </Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
)