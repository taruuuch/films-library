import React from 'react'
import { Input, Dropdown } from 'semantic-ui-react'

export const SearchForm = ({ onSearch }) => {
    const options = [
        { key: 'title', text: 'Title', value: 'title' },
        { key: 'stars', text: 'Star', value: 'stars' },
    ]

    const onClickSearch = () => {
        const key = document.querySelector('[aria-atomic="true"]').innerText.toLowerCase()
        const value = document.getElementById('search').value
        const params = {}
        params[key] = value

        onSearch(params)
    }

    return (
        <Input
            id='search'
            type='text'
            placeholder='Search...'
            label={<Dropdown
                defaultValue='title'
                options={options}
            />}
            labelPosition='left'
            onChange={onClickSearch}
        />
    )
}
