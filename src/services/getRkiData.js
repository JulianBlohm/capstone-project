export default function getRkiData(coordinates) {
    return fetch(
        `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?outFields=OBJECTID,cases7_per_100k,BEZ,GEN,last_update,BL&geometryType=esriGeometryPoint&spatialRel=esriSpatialRelWithin&inSR=4326&outSR=4326&f=json&geometry=${coordinates.longitude},${coordinates.latitude}`
    )
        .then((res) => res.json())
        .then((data) => {
            const filteredData = data.features[0].attributes
            return {
                countyType: filteredData.BEZ,
                countyName: filteredData.GEN,
                incidence: Math.round(filteredData.cases7_per_100k),
                last_update: filteredData.last_update,
            }
        })
        .catch(() => 'error')
}
