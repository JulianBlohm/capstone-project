import { useState, useEffect } from 'react'
import getGeoData from '../services/getGeoData'
import getRkiData from '../services/getRkiData'

export default function useUserLocation() {

    const [userPlace, setUserPlace] = useState('')
    const [coordinates, setCoordinates] = useState({
        latitude: 0,
        longitude: 0,
    })
    const [countyData, setCountyData] = useState({
        countyName: '',
        incidence: 0
    })
    const [ errorMessage, setErrorMessage ] = useState()

    useEffect(() => {userPlace && getCountyData()}, [userPlace])
    useEffect(() => {coordinates.longitude && getIncidenceData()}, [coordinates])
    useEffect(() => setErrorMessage(''), [userPlace,coordinates] )

    function getCountyData() {
        getGeoData(userPlace)
            .then(geoData => setCoordinates({latitude: Number(geoData[0].lat).toFixed(6), longitude: Number(geoData[0].lon).toFixed(6)}))
            .catch((error) => setErrorMessage('Ort konnte vom Server nicht bestimmt werden'))
    }

    function getIncidenceData() {
         getRkiData(coordinates)
            .then(data => setCountyData({countyName: data.features[0].attributes.GEN, incidence: Math.round(data.features[0].attributes.cases7_per_100k) })) 
            .catch((error) => {!errorMessage && setErrorMessage('RKI-Daten konnten nicht geladen werden')})
    }

    return {
        setUserPlace,
        countyData,
        errorMessage
    }
}