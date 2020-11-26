import { useEffect } from 'react'
import styled from 'styled-components/macro'
import Form from './components/Form'

function MainPage({
    setUserPlace,
    errorMessage,
    isCountyDataLoaded,
    resetSearch,
}) {
    useEffect(() => {
        isCountyDataLoaded && errorMessage && resetSearch()
    }, [])

    return (
        <MainPageStyled>
            <h1>Bin ich in einem Covid-19 Hotspot?</h1>
            <Form
                setUserPlace={setUserPlace}
                errorMessage={errorMessage}
            ></Form>
        </MainPageStyled>
    )
}

const MainPageStyled = styled.div`
    padding: 10px;
    display: grid;
    grid-gap: 20px;
    background: #f5f5f7;

    h1 {
        margin: 100px 0;
    }
`

export default MainPage
