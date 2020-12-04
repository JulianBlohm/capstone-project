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
                        userPlace={userPlace}
                        setUserPlace={setUserPlace}
                        errorMessage={errorMessage}
                        isDataLoading={isDataLoading}
                        resetSearch={resetSearch}
                        setSearchOrigin={setSearchOrigin}
                    />
                </Route>

                <Route path="/s/:id">
                    {isDataLoading ? (
                        <LoadingPage />
                    ) : (
                        <ResultPage
                            setUserPlace={setUserPlace}
                            countyData={countyData}
                            isCountyDataLoaded={isCountyDataLoaded}
                            showMainPage={showMainPage}
                        />
                    )}
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
    max-width: 667px;
`

export default App
