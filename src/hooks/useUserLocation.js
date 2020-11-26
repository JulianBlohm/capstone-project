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
    const [isDataLoading, setIsDataLoading] = useState(true)
    const [isCountyDataLoaded, setIsCountyDataLoaded] = useState(false)

    useEffect(() => {
        userPlace && getCountyData()
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

    function getCountyData() {
        getGeoData(userPlace)
            .then((geoData) =>
                setCoordinates({
                    latitude: Number(geoData[0].lat).toFixed(6),
                    longitude: Number(geoData[0].lon).toFixed(6),
                })
            )
            .catch((error) =>
                setErrorMessage('Ort konnte vom Server nicht bestimmt werden')
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
                    setErrorMessage('RKI-Daten konnten nicht geladen werden')
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
    }

    function showResultPage() {
        setIsDataLoading(false)
        const countyNameCompact = countyData.countyName.replace(/ /g, '')
        history.push(`/${countyNameCompact}`)
    }

    return {
        setUserPlace,
        countyData,
        errorMessage,
        isDataLoading,
        isCountyDataLoaded,
        resetSearch,
    }
}
