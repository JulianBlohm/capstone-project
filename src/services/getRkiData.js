export default function getRkiData(county) {
    return fetch(`https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=GEN%20%3D%20%27${county}%27&outFields=OBJECTID,GEN,cases7_per_100k&outSR=4326&f=json`)
        .then(res => res.json())
}