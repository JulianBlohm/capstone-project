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

    const [status, setStatus] = useState('input')

    const [isError, setIsError] = useState(false)
    const [isDataLoading, setIsDataLoading] = useState(false)

    const countyNameUrl = countyData.countyName.replace(/\s/g, '')

    const isCountyDataLoaded = !!countyData?.countyName

    useEffect(() => {
        userPlace && startSearch()
    }, [userPlace])
    useEffect(() => {
        coordinates.longitude && continueSearch()
    }, [coordinates])
    useEffect(() => setIsError(false), [userPlace, coordinates])
    useEffect(() => {
        isCountyDataLoaded && showResultPage()
    }, [isCountyDataLoaded])
    useEffect(() => {
        isError && setIsDataLoading(false)
    }, [isError])

    async function startSearch() {
        setIsDataLoading(true)
        const geoData = await getGeoData(userPlace)
        geoData === 'error' ? handleError() : setCoordinates(geoData)
        console.log('geo' + geoData)
    }

    async function continueSearch() {
        const rkiData = await getRkiData(coordinates)
        rkiData === 'error' ? handleError() : setCountyData(rkiData)
        console.log(rkiData)
    }

    function handleError() {
        setIsError(true)
        setIsDataLoading(false)
    }

    function showResultPage() {
        setIsDataLoading(false)
        history.push(`/s/${countyNameUrl}`)
    }

    function resetSearch() {
        setIsError(false)
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
    }

    return {
        userPlace,
        setUserPlace,
        countyData,
        isError,
        isDataLoading,
        isCountyDataLoaded,
        resetSearch,
    }
}
