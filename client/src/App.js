import React from 'react'
import { useRoutes } from './routes'
import { Container } from 'semantic-ui-react'

function App() {
    const routes = useRoutes()

    return (
        <Container style={{ margin: 15 }}>
            {routes}
        </Container>
    )
}

export default App