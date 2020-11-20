import styled from 'styled-components/macro'
import useUserLocation from './hooks/useUserLocation'
import Form from './components/Form'


function MainPage() {
    
    const { 
        setUserPlace, 
        countyData,
        errorMessage 
    } 
    = useUserLocation()   

    return (
        <MainPageStyled>
            <h1>Wie ist der Covid-19 Inzidenzwert in meinem Landkreis?</h1>
            <Form 
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