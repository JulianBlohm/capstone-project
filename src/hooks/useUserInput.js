import { useState } from 'react'

export default function useUserInput() {

    const [userInput, setUserInput] = useState('')
    const [userPlace, setUserPlace] = useState('')
    const [coordinates, setCoordinates] = useState({
        latitude: 0,
        longitude: 0,
    })
    const [countyData, setCountyData] = useState({
        countyName: '',
        incidence: 0
    })

    return {
        userInput,
        setUserInput,
        userPlace,
        setUserPlace,
        coordinates,
        setCoordinates,
        countyData,
        setCountyData
    }
}