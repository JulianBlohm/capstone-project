export default function getRkiData(coordinates) {
    return fetch(`https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?outFields=OBJECTID,cases7_per_100k,GEN,last_update,BL&geometryType=esriGeometryPoint&spatialRel=esriSpatialRelWithin&inSR=4326&outSR=4326&f=json&geometry=${coordinates.longitude},${coordinates.latitude}`)
        .then(res => res.json())
}