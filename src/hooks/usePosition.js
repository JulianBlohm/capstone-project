import { useState } from 'react'

export default function usePosition() {
    const [position, setPosition] = useState({
        latitude: null,
        longitude: null,
    })

    const geo = navigator.geolocation

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
    }

    function getPosition() {
        if (!geo) {
            setPosition('noService')
        } else {
            geo.getCurrentPosition(success, error, options)
        }
    }

    function success(pos) {
        const coords = pos.coords
        setPosition({
            latitude: Number(coords.latitude).toFixed(6),
            longitude: Number(coords.longitude).toFixed(6),
        })
    }

    function error(err) {
        setPosition('locationError')
    }

    return { position, getPosition }
}
