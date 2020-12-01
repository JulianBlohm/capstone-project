import { useEffect } from 'react'
import styled from 'styled-components/macro'
import Form from './components/Form'
import FAQ from './components/FAQ'

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
            <div className="form-wrapper">
                <h1>Bin ich in einem Covid-19 Hotspot?</h1>
                <Form
                    setUserPlace={setUserPlace}
                    errorMessage={errorMessage}
                    isDataLoading={isDataLoading}
                    setSearchOrigin={setSearchOrigin}
                />
            </div>

            <FAQ />
        </MainPageStyled>
    )
}

const MainPageStyled = styled.div`
    display: grid;
    grid-gap: 40px;

    .form-wrapper {
        padding: 10px;
        background: var(--silver);
    }

    h1 {
        margin: 100px 0;
    }
`

export default MainPage
