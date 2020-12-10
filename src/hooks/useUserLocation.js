import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import getGeoData from '../services/getGeoData'
import getRkiData from '../services/getRkiData'
import usePosition from './usePosition'

export default function useUserLocation() {
    const { position, getPosition } = usePosition()

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

    const [status, setStatus] = useState('')

    const countyNameUrl = countyData.countyName.replace(/\s/g, '')

    useEffect(() => {
        userPlace && setStatus('loading')
    }, [userPlace])
    useEffect(() => {
        !!position?.longitude && setCoordinates(position)
    }, [position])
    useEffect(() => {
        !!coordinates?.longitude && continueSearch()
    }, [coordinates])
    useEffect(() => {
        !!countyData?.countyName && setStatus('loaded')
    }, [countyData])
    useEffect(() => {
        handleStatusChange()
    }, [status])

    console.log(coordinates)
    console.log(status)
    console.log(position)

    function startLocating() {
        setStatus('locating')
    }

    async function startSearch() {
        const geoData = await getGeoData(userPlace)
        geoData === 'error' ? setStatus('error') : setCoordinates(geoData)
    }

    async function continueSearch() {
        const rkiData = await getRkiData(coordinates)
        rkiData === 'error' ? setStatus('error') : setCountyData(rkiData)
    }

    function handleStatusChange() {
        if (status === 'loading') {
            startSearch()
        } else if (status === 'loaded') {
            history.push(`/s/${countyNameUrl}`)
        } else if (status === 'error') {
            history.push('/error')
        } else if (status === 'locating') {
            getPosition()
        }
    }

    function resetSearch() {
        setStatus('')
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
        status,
        resetSearch,
        startLocating,
    }
}
