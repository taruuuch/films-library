import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
    <Menu pointing>
        <Menu.Item>
            <NavLink to='/'>
                Films
            </NavLink>
        </Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item>
                <a href="https://github.com/taruuuch/films-library" target="_blank" rel="noopener noreferrer">
                    <Icon color='black' name='github' size='large' />
                </a>
            </Menu.Item>
        </Menu.Menu>
    </Menu>
)