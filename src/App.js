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
        isError,
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
                        isError={isError}
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
                            userPlace={userPlace}
                            setUserPlace={setUserPlace}
                            countyData={countyData}
                            isCountyDataLoaded={isCountyDataLoaded}
                            showMainPage={showMainPage}
                            isError={isError}
                        />
                    )}
                </Route>

                <Route path="/error">
                    <ErrorPage
                        resetSearch={resetSearch}
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
