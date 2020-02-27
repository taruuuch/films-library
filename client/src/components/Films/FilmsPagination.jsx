import React from 'react'
import { Pagination } from 'semantic-ui-react'

export const FilmsPagination = (props) => {
    const { activePage, totalPages, onPageChange } = props

    return (
        <Pagination
            defaultActivePage={activePage}
            pointing
            secondary
            totalPages={totalPages}
            onPageChange={(event, data) => {
                onPageChange(data.activePage)
            }}
        />
    )
}
