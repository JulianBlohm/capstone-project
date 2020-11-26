import { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import getGeoData from '../services/getGeoData'
import getRkiData from '../services/getRkiData'

export default function useUserLocation() {
    const history = useHistory()

    const loadingTimer = useRef()

    const [userPlace, setUserPlace] = useState('')
    const [coordinates, setCoordinates] = useState({
        latitude: 0,
        longitude: 0,
    })
    const [countyData, setCountyData] = useState({
        countyName: '',
        incidence: 0,
        last_update: '',
    })
    const [errorMessage, setErrorMessage] = useState()
    const [isDataLoading, setIsDataLoading] = useState(true)
    const [isCountyDataLoaded, setIsCountyDataLoaded] = useState(false)

    const countyNameUrl = countyData.countyName.replace(/ /g, '')

    useEffect(() => {
        userPlace && startSearch()
    }, [userPlace])
    useEffect(() => {
        coordinates.longitude && getIncidenceData()
    }, [coordinates])
    useEffect(() => setErrorMessage(''), [userPlace, coordinates])
    useEffect(() => {
        countyData.countyName && setIsCountyDataLoaded(true)
    }, [countyData])
    useEffect(() => {
        isCountyDataLoaded && showResultPage()
    }, [isCountyDataLoaded])

    function startSearch() {
        startTimer()
        getCounty()
    }

    function startTimer() {
        loadingTimer.current && clearTimeout(loadingTimer.current)
        loadingTimer.current = setTimeout(() => showErrorPage(), 3000)
    }

    function showErrorPage() {
        history.replace('/error')
    }

    function showResultPage() {
        clearTimeout(loadingTimer.current)
        setIsDataLoading(false)
        history.push(`/s/${countyNameUrl}`)
    }

    function getCounty() {
        getGeoData(userPlace)
            .then((geoData) =>
                setCoordinates({
                    latitude: Number(geoData[0].lat).toFixed(6),
                    longitude: Number(geoData[0].lon).toFixed(6),
                })
            )
            .catch((error) => handleError())
    }

    function getIncidenceData() {
        getRkiData(coordinates)
            .then((data) => {
                const filteredData = data.features[0].attributes
                setCountyData({
                    countyName: filteredData.GEN,
                    incidence: Math.round(filteredData.cases7_per_100k),
                    last_update: filteredData.last_update,
                })
            })
            .catch((error) => {
                !errorMessage && handleError()
            })
    }

    function handleError() {
        setErrorMessage('Daten konnten nicht geladen werden')
    }

    function resetSearch() {
        setUserPlace('')
        setCoordinates({
            latitude: 0,
            longitude: 0,
        })
        setCountyData({
            countyName: '',
            incidence: 0,
            last_update: '',
        })
        setIsCountyDataLoaded(false)
        setErrorMessage('')
    }

    return {
        setUserPlace,
        countyData,
        errorMessage,
        setErrorMessage,
        isDataLoading,
        isCountyDataLoaded,
        resetSearch,
    }
}
