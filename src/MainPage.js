import Button from './components/Button'
import Input from './components/Input'
import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import getRkiData from './services/getRkiData'

function MainPage() {
    
    const [userInput, setUserInput] = useState('')
    const [county, setCounty] = useState('')
    const [incidence, setIncidence] = useState(0)
    
    const countyResult = county.charAt(0).toUpperCase() + county.slice(1)

    useEffect(() => getCountyData(), [county])

    function getCountyData() {
        getRkiData(county)
            .then(data => setIncidence(Math.round(data.features[0].attributes.cases7_per_100k)))
            .catch((error) => console.log('No Data from Server'))
    }       

    function handleChange(event) {
        setUserInput(event.target.value);
        console.log(userInput)
      }

    function sendForm(event) {
        event.preventDefault()
        setCounty(userInput)
        setUserInput('')
    }

    return (
        <MainPageStyled>
            <h1>Wie ist der Covid-19 Inzidenzwert in meinem Landkreis?</h1>
            <form onSubmit={sendForm}>
                <Input 
                    value={userInput}
                    onChange= {handleChange} 
                    placeholderText="Gib deinen Landkreis ein..."/>
                <Button text="Suchen"/>
            </form>
            { incidence ? <h2> {countyResult} hat aktuell eine 7-Tage-Inzidenz von {incidence} </h2> : '' }
        </MainPageStyled> 
    )
}

const MainPageStyled = styled.div`
padding: 10px;
display: grid;
grid-gap: 20px;
background: #F5F5F7;

button {
    margin-top: 20px;
}
`


export default MainPage