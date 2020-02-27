import React from 'react'
import { useRoutes } from './routes'
import { Container } from 'semantic-ui-react'
import { Navbar } from './components/Navbar'

function App() {
    const routes = useRoutes()

    return (
        <>
            <Navbar />
            <Container style={{ margin: 15 }}>
                {routes}
            </Container>
        </>
    )
}

export default App