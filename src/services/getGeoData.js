export default function getGeoData(place) {
    return fetch(`https://nominatim.openstreetmap.org/search?q=${place}&format=json&countrycodes=de&limit=1`)
        .then(res => res.json())
}