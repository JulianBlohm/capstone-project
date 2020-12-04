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
    const [isError, setIsError] = useState(false)
    const [isDataLoading, setIsDataLoading] = useState(false)

    const countyNameUrl = countyData.countyName.replace(/\s/g, '')

    const isCountyDataLoaded = !!countyData?.countyName

    useEffect(() => {
        userPlace && startSearch()
    }, [userPlace])
    useEffect(() => {
        coordinates.longitude && getIncidenceData()
    }, [coordinates])
    useEffect(() => setIsError(''), [userPlace, coordinates])
    useEffect(() => {
        isCountyDataLoaded && showResultPage()
    }, [isCountyDataLoaded])
    useEffect(() => {
        isError && setIsDataLoading(false)
    }, [isError])

    async function startSearch() {
        setIsDataLoading(true)
        const geoData = await getGeoData(userPlace)
        setCoordinates(geoData)
    }

    function showResultPage() {
        setIsDataLoading(false)
        history.push(`/s/${countyNameUrl}`)
    }

    function showMainPage() {
        history.push('/')
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
        setIsError(false)
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
            .catch(() => {
                !isError && setIsError(true)
            })
    }

    return {
        userPlace,
        setUserPlace,
        countyData,
        isError,
        setIsError,
        isDataLoading,
        isCountyDataLoaded,
        resetSearch,
        showMainPage,
    }
}
