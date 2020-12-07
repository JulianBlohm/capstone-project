import { useEffect } from 'react'
import styled from 'styled-components/macro'
import Form from './components/Form'
import FAQ from './components/FAQ'
import { ReactComponent as VirusRed } from './assets/virus-red2.svg'
import scrollUp from './lib/scrollUp'

function MainPage({ userPlace, setUserPlace, resetSearch, status }) {
    useEffect(() => {
        userPlace && resetSearch()
    }, [])

    useEffect(() => scrollUp(), [])

    return (
        <MainPageStyled>
            <Intro>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <Heading>Bin ich in einem Covid-19 Hotspot?</Heading>
                <SubHeading>
                    Überprüfe jetzt anhand der RKI Daten, ob dein aktueller
                    Standort ein Covid‑19 Hotspot ist.
                </SubHeading>
            </Intro>
            <Form
                userPlace={userPlace}
                setUserPlace={setUserPlace}
                status={status}
            />
            <FAQ />
        </MainPageStyled>
    )
}

const MainPageStyled = styled.div`
    display: grid;
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

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 50px;
`
const Logo = styled(VirusRed)`
    width: 120px;
`

export default MainPage
