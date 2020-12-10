import { useState, useEffect } from 'react'

export default function usePosition() {
    const [position, setPosition] = useState({
        latitude: null,
        longitude: null,
    })
    const [error, setError] = useState('')

    const geo = navigator.geolocation

    if (!geo) {
        setError('Geolocation is not supported')
        return
    } else {
        getPosition()
    }

    async function getPosition() {
        const geoLocation = await geo.getCurrentPosition()
        geoLocation &&
            setPosition({
                latitude: geoLocation.coords.latitude,
                longitude: geoLocation.coords.longitude,
            })
    }

    return { position, error }
}
