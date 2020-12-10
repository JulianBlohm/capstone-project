import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import useUserLocation from './hooks/useUserLocation'
import MainPage from './MainPage'
import ResultPage from './ResultPage'
import ErrorPage from './ErrorPage'
import LoadingPage from './LoadingPage'

function App() {
    const {
        userPlace,
        setUserPlace,
        countyData,
        resetSearch,
        status,
        getPosition,
        isLocationAvailable,
    } = useUserLocation()

    return (
        <AppStyled>
            <Switch>
                <Route exact path="/">
                    <MainPage
                        userPlace={userPlace}
                        setUserPlace={setUserPlace}
                        resetSearch={resetSearch}
                        status={status}
                        startLocating={getPosition}
                        isLocationAvailable={isLocationAvailable}
                    />
                </Route>

                <Route path="/s/:id">
                    {status === 'loading' || status === 'locating' ? (
                        <LoadingPage />
                    ) : (
                        <ResultPage
                            setUserPlace={setUserPlace}
                            countyData={countyData}
                            status={status}
                        />
                    )}
                </Route>

                <Route path="/error">
                    <ErrorPage resetSearch={resetSearch} />
                </Route>
            </Switch>
        </AppStyled>
    )
}

const AppStyled = styled.div`
    max-width: 667px;
`

export default App
