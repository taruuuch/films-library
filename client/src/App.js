import React from 'react'
import { useRoutes } from './routes'
import { Container } from 'semantic-ui-react'
import { FilmList } from './components/Films/FilmsList'

function App() {
    const routes = useRoutes()
    const films = [
        {
            _id: '5e564b0178f7823b0ceda541',
            title: 'The Sting',
            release_year: '1973',
            format: 'DVD'
        },
        {
            _id: '5e564b0178f7823b0ceda541',
            title: 'The Muppet Movie',
            release_year: '1979',
            format: 'DVD'
        },
        {
            _id: '5e564b0178f7823b0ceda541',
            title: 'Get Shorty',
            release_year: '1995',
            format: 'DVD'
        },
        {
            _id: '5e564b0178f7823b0ceda541',
            title: 'My Cousin Vinny',
            release_year: '1992',
            format: 'DVD'
        },
        {
            _id: '5e564b0178f7823b0ceda541',
            title: 'Gladiator',
            release_year: '2000',
            format: 'Blu-Ray'
        }
    ]

    return (
        <Container style={{ margin: 15 }}>
            {/* {routes} */}
            <FilmList films={films} />
        </Container>
    )
}

export default App