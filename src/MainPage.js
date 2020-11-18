import Form from './components/Form'
import styled from 'styled-components/macro'
import { useEffect } from 'react'
import getRkiData from './services/getRkiData'
import useUserInput from './hooks/useUserInput'

function MainPage() {
    
    const { 
        userInput, 
        setUserInput, 
        county, 
        setCounty, 
        incidence, 
        setIncidence
    } 
    = useUserInput()
    
    const countyResult = county.charAt(0).toUpperCase() + county.slice(1)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getCountyData(), [county])

    function getCountyData() {
        getRkiData(county)
            .then(data => setIncidence(Math.round(data.features[0].attributes.cases7_per_100k)))
            .catch((error) => console.log('No Data from Server'))
    }       

    return (
        <MainPageStyled>
            <h1>Wie ist der Covid-19 Inzidenzwert in meinem Landkreis?</h1>
            <Form 
                userInput={userInput}
                setUserInput={setUserInput}
                setCounty={setCounty}
                >
            </Form>
            
            { incidence ? <h2> {countyResult} hat aktuell eine 7-Tage-Inzidenz von {incidence} </h2> : '' }
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