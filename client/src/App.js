import React, { useEffect } from 'react'
import { useRoutes } from './routes'
import { MessageBox } from './components/MessageBox'
import { Navbar } from './components/Navbar'
import { Container } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { clearErrors } from './redux/message/actions'

function App() {
    const routes = useRoutes()
    const dispatch = useDispatch()

    const hasError = useSelector(state => state.message.hasError)
    const hasSuccess = useSelector(state => state.message.hasSuccess)
    const errorList = useSelector(state => state.message.msg.errors)
    const header = useSelector(state => {
        if (state.message.msg.message) {
            return state.message.msg.message
        } else {
            return state.message.msg
        }
    })

    const handleDismiss = () => dispatch(clearErrors())


    return (
        <>
            <Navbar />
            <Container style={{ margin: 15 }}>
                {(hasError || hasSuccess) &&
                    <MessageBox
                        hasError={hasError}
                        hasSuccess={hasSuccess}
                        header={header}
                        errors={errorList}
                        handleDismiss={handleDismiss}
                    />
                }
                {routes}
            </Container>
        </>
    )
}

export default App