import { useEffect } from 'react'
import styled from 'styled-components/macro'
import Form from './components/Form'

function MainPage({
    userPlace,
    setUserPlace,
    errorMessage,
    isDataLoading,
    resetSearch,
    setSearchOrigin,
}) {
    useEffect(() => {
        userPlace && resetSearch()
    }, [])

    return (
        <MainPageStyled>
            <h1>Bin ich in einem Covid-19 Hotspot?</h1>
            <Form
                setUserPlace={setUserPlace}
                errorMessage={errorMessage}
                isDataLoading={isDataLoading}
                setSearchOrigin={setSearchOrigin}
            />
        </MainPageStyled>
    )
}

const MainPageStyled = styled.div`
    padding: 10px;
    display: grid;
    grid-gap: 20px;
    background: var(--silver);

    h1 {
        margin: 100px 0;
    }
`

export default MainPage
