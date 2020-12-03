import { useEffect } from 'react'
import styled from 'styled-components/macro'
import Form from './components/Form'
import FAQ from './components/FAQ'
import { ReactComponent as VirusRed } from './assets/virus-red2.svg'

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
            <div className="intro-wrapper">
                <div className="logo-wrapper">
                    <VirusRed className="logo" />
                </div>
                <h1>Bin ich in einem Covid-19 Hotspot?</h1>
                <h2>
                    Überprüfe jetzt anhand der RKI Daten, ob dein aktueller
                    Standort ein Covid‑19 Hotspot ist.
                </h2>
            </div>
            <Form
                setUserPlace={setUserPlace}
                errorMessage={errorMessage}
                isDataLoading={isDataLoading}
                setSearchOrigin={setSearchOrigin}
            />

            <FAQ />
        </MainPageStyled>
    )
}

const MainPageStyled = styled.div`
    display: grid;

    h1 {
        margin-bottom: 25px;
        font-size: 32px;
        line-height: 1.4;
    }

    h2 {
        font-size: 20px;
        line-height: 1.3;
        font-weight: 500;
        color: var(--gray);
        width: 75%;
        margin-bottom: 42px;
    }

    .intro-wrapper {
        padding: 0 30px;
        background: var(--silver);
    }

    .logo-wrapper {
        display: flex;
        justify-content: center;
        padding-top: 40px;
        padding-bottom: 95px;
    }

    .logo {
        width: 120px;
    }
`

export default MainPage
