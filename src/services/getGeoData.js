export default function getGeoData(place) {
    return fetch(
        `https://nominatim.openstreetmap.org/search?q=${place}&format=json&countrycodes=de&limit=1`
    )
        .then((res) => res.json())
        .then((geoData) => {
            return {
                latitude: Number(geoData[0].lat).toFixed(6),
                longitude: Number(geoData[0].lon).toFixed(6),
            }
        })
        .catch(() => 'error')
}
