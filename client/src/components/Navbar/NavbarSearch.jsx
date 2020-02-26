import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

const options = [
    { key: 'all', text: 'All', value: 'all' },
    { key: 'title', text: 'Title', value: 'title' },
    { key: 'stars', text: 'Stars', value: 'stars' },
]

export const NavbarSearch = () => (
    <Input
        // loading
        // disabled
        type='text'
        placeholder='Search...'
        label={
            <Dropdown
                defaultValue='title'
                options={options}
            />
        }
        labelPosition='left'
        icon={{
            name: 'search',
            circular: true,
            link: true
        }}
    />
)