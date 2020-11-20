import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import getGeoData from './services/getGeoData'
import getRkiData from './services/getRkiData'
import useUserInput from './hooks/useUserInput'
import Form from './components/Form'


function MainPage() {
    
    const { 
        userInput, 
        setUserInput, 
        userPlace, 
        setUserPlace,
        coordinates,
        setCoordinates, 
        countyData, 
        setCountyData
    } 
    = useUserInput()

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
      

    return (
        <MainPageStyled>
            <h1>Wie ist der Covid-19 Inzidenzwert in meinem Landkreis?</h1>
            <Form 
                userInput={userInput}
                setUserInput={setUserInput}
                setUserPlace={setUserPlace}
                errorMessage={errorMessage}
                >
            </Form>
            
            { countyData.incidence ? <h2> {countyData.countyName} hat aktuell eine 7-Tage-Inzidenz von {countyData.incidence} </h2> : '' }
        </MainPageStyled> 
    )
}

const MainPageStyled = styled.div`
padding: 10px;
display: grid;
grid-gap: 20px;
background: #F5F5F7;
`


export default MainPage