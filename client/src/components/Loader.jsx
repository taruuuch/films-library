import React from 'react'
import { Container, Loader } from 'semantic-ui-react'

export const CustomLoader = () => (
    <Container style={{ margin: 15 }}>
        <Loader active inline='centered' content='Loading' />
    </Container>
)