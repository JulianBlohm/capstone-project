import { useState } from 'react'

export default function useUserInput() {

    const [userInput, setUserInput] = useState('')
    const [county, setCounty] = useState('')
    const [incidence, setIncidence] = useState(0)

    return {
        userInput,
        setUserInput,
        county,
        setCounty,
        incidence,
        setIncidence
    }
}