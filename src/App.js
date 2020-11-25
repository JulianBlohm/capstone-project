import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import useUserLocation from './hooks/useUserLocation'
import MainPage from './MainPage'
import ResultPage from './ResultPage'

function App() {
    const {
        setUserPlace,
        countyData,
        errorMessage,
        newSearch,
    } = useUserLocation()

    return (
        <AppStyled>
            <Switch>
                <Route exact path="/">
                    <MainPage
                        setUserPlace={setUserPlace}
                        errorMessage={errorMessage}
                        newSearch={newSearch}
                    />
                </Route>

                <Route path="/:id">
                    <ResultPage
                        setUserPlace={setUserPlace}
                        countyData={countyData}
                    />
                </Route>
            </Switch>
        </AppStyled>
    )
}

const AppStyled = styled.div`
    max-width: 375px;
`

export default App