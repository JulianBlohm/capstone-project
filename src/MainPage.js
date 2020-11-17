import Button from './components/Button'
import Input from './components/Input'
import styled from 'styled-components/macro'

function MainPage() {
    return (
        <MainPageStyled>
            <h1>Wie ist der Covid-19 Inzidenzwert in meinem Landkreis?</h1>
            <Input placeholderText="Gib deinen Landkreis ein..."/>
            <Button text="Suchen"/>
            <h2> XY hat aktuell eine 7-Tage-Inzidenz von XY </h2>
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