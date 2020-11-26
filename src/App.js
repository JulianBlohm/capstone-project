import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import useUserLocation from './hooks/useUserLocation'
import MainPage from './MainPage'
import ResultPage from './ResultPage'
import ErrorPage from './ErrorPage'

function App() {
    const {
        setUserPlace,
        countyData,
        errorMessage,
        setErrorMessage,
        isDataLoading,
        isCountyDataLoaded,
        resetSearch,
        showMainPage,
        setSearchOrigin,
    } = useUserLocation()

    return (
        <AppStyled>
            <Switch>
                <Route exact path="/">
                    <MainPage
                        setUserPlace={setUserPlace}
                        errorMessage={errorMessage}
                        isDataLoading={isDataLoading}
                        isCountyDataLoaded={isCountyDataLoaded}
                        resetSearch={resetSearch}
                        setSearchOrigin={setSearchOrigin}
                    />
                </Route>

                <Route path="/s/:id">
                    <ResultPage
                        setUserPlace={setUserPlace}
                        countyData={countyData}
                        isDataLoading={isDataLoading}
                        isCountyDataLoaded={isCountyDataLoaded}
                    />
                </Route>

                <Route path="/error">
                    <ErrorPage
                        setErrorMessage={setErrorMessage}
                        showMainPage={showMainPage}
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
