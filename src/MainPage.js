import { useEffect } from 'react'
import styled from 'styled-components/macro'
import Form from './components/Form'
import FAQ from './components/FAQ'
import { ReactComponent as VirusRed } from './assets/virus-red2.svg'
import scrollUp from './lib/scrollUp'

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

    useEffect(() => scrollUp(), [])

    return (
        <MainPageStyled>
            <Intro>
                <Logo>
                    <VirusRed className="logo" />
                </Logo>
                <Heading>Bin ich in einem Covid-19 Hotspot?</Heading>
                <SubHeading>
                    Überprüfe jetzt anhand der RKI Daten, ob dein aktueller
                    Standort ein Covid‑19 Hotspot ist.
                </SubHeading>
            </Intro>
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

    .logo {
        width: 120px;
    }
`
const Heading = styled.h1`
    margin-bottom: 25px;
    font-size: 2rem;
    line-height: 1.4;
`

const SubHeading = styled.h2`
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 500;
    color: var(--gray);
    width: 75%;
    margin-bottom: 42px;
`

const Intro = styled.div`
    padding: 0 30px;
    background: var(--silver);
`

const Logo = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 95px;
`

export default MainPage
