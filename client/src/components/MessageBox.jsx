import React from 'react'
import { Message } from 'semantic-ui-react'

export const MessageBox = (props) => {
    const { hasError, hasSuccess, header, errors } = props
    const errorList = Array.isArray(errors) && errors.map(error => Object.values(error))

    return (
        <Message
            error={hasError}
            success={hasSuccess}
            header={header}
            list={errorList}
        />
    )
}
