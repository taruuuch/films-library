import React from 'react'
import { useRoutes } from './routes'
import { MessageBox } from './components/MessageBox'
import { Navbar } from './components/Navbar'
import { Container } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'

function App() {
    const routes = useRoutes()
    const dispatch = useDispatch()

    const hasError = useSelector(state => state.message.hasError)
    const hasSuccess = useSelector(state => state.message.hasSuccess)

    return (
        <>
            <Navbar />
            <Container style={{ margin: 15 }}>
                {(hasError || hasSuccess) &&
                    <MessageBox
                        hasError={hasError}
                        hasSuccess={true}
                        header={'Kuku'}
                        errors={['1', '2']}
                    />
                }
                {routes}
            </Container>
        </>
    )
}

export default App