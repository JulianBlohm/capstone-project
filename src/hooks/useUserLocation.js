import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import getGeoData from '../services/getGeoData'
import getRkiData from '../services/getRkiData'

export default function useUserLocation() {
    const history = useHistory()

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
    const [isDataLoading, setIsDataLoading] = useState(false)
    const [isCountyDataLoaded, setIsCountyDataLoaded] = useState(false)
    const [searchOrigin, setSearchOrigin] = useState('')

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
    useEffect(() => {
        errorMessage && handleError()
    }, [errorMessage])

    function startSearch() {
        setIsDataLoading(true)
        getCounty()
    }

    console.log(userPlace)
    console.log(coordinates)
    console.log(countyData)
    console.log(isDataLoading)
    console.log(isCountyDataLoaded)
    console.log(searchOrigin)

    function handleError() {
        setIsDataLoading(false)
        searchOrigin != 'MainPage' && history.push('/error')
    }

    function showResultPage() {
        setIsDataLoading(false)
        history.push(`/s/${countyNameUrl}`)
    }

    function showMainPage() {
        history.push('/')
    }

    function getCounty() {
        getGeoData(userPlace)
            .then((geoData) =>
                setCoordinates({
                    latitude: Number(geoData[0].lat).toFixed(6),
                    longitude: Number(geoData[0].lon).toFixed(6),
                })
            )
            .catch((error) =>
                setErrorMessage('Daten konnten nicht geladen werden')
            )
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
                !errorMessage &&
                    setErrorMessage('Daten konnten nicht geladen werden')
            })
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
        setSearchOrigin('')
    }

    return {
        setUserPlace,
        countyData,
        errorMessage,
        setErrorMessage,
        isDataLoading,
        isCountyDataLoaded,
        resetSearch,
        showMainPage,
        setSearchOrigin,
    }
}
