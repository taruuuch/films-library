import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { NavbarSearch } from './NavbarSearch'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <Menu pointing>
            <Menu.Item>
                <NavLink to='/'>
                    Films
                </NavLink>
            </Menu.Item>
            <Menu.Item>
                <a href="https://github.com/taruuuch/films-library" target="_blank" rel="noopener noreferrer">
                    <Icon color='black' name='github' size='large' />
                </a>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <NavbarSearch />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}