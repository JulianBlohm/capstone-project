import { useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import getGeoData from './services/getGeoData'
import getRkiData from './services/getRkiData'
import MainPage from './MainPage'
import ResultPage from './ResultPage'
import ErrorPage from './ErrorPage'
import LoadingPage from './LoadingPage'

function App() {
    const history = useHistory()

    const [countyData, setCountyData] = useState({
        countyName: '',
        incidence: 0,
        last_update: '',
    })

    const [status, setStatus] = useState('')
    const [isLocationAvailable, setIsLocationAvailable] = useState(true)

    async function startSearch(place) {
        setStatus('loading')
        const geoData = await getGeoData(place)
        geoData === 'error' ? history.push('/error') : continueSearch(geoData)
    }

    async function continueSearch(coordinates) {
        const rkiData = await getRkiData(coordinates)
        rkiData === 'error' ? history.push('/error') : showResult(rkiData)
    }

    function showResult(rkiData) {
        setCountyData(rkiData)
        setStatus('loaded')
        const countyNameUrl = rkiData.countyName
            .replace(/\s/g, '-')
            .toLowerCase()
            .replace(/([A-Z])(.*)/g, '')
        history.push(`/s/${countyNameUrl}`)
    }

    function startLocating() {
        setStatus('locating')
        getPosition()
    }

    function getPosition() {
        if (!navigator.geolocation) {
            handlePosition('noService')
        } else {
            navigator.geolocation.getCurrentPosition(success, error)
        }
    }

    function success(pos) {
        const coords = pos.coords
        handlePosition({
            latitude: Number(coords.latitude).toFixed(6),
            longitude: Number(coords.longitude).toFixed(6),
        })
    }

    function error(err) {
        handlePosition('noService')
    }

    function handlePosition(position) {
        if (position === 'noService') {
            setStatus('')
            setIsLocationAvailable(false)
        } else continueSearch(position)
    }

    function resetSearch() {
        setStatus('')
        setCountyData({
            countyName: '',
            incidence: 0,
            last_update: '',
        })
    }

    return (
        <AppWrapper>
            <Switch>
                <Route exact path="/">
                    <MainPage
                        resetSearch={resetSearch}
                        status={status}
                        startLocating={startLocating}
                        isLocationAvailable={isLocationAvailable}
                        startSearch={startSearch}
                    />
                </Route>

                <Route path="/s/:id">
                    {status === 'loading' || status === 'locating' ? (
                        <LoadingPage />
                    ) : (
                        <ResultPage
                            startSearch={startSearch}
                            countyData={countyData}
                            status={status}
                        />
                    )}
                </Route>

                <Route path="/error">
                    <ErrorPage resetSearch={resetSearch} />
                </Route>
            </Switch>
        </AppWrapper>
    )
}

const AppWrapper = styled.div`
    max-width: 667px;
`

export default App
