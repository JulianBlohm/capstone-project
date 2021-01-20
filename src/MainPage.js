import { useEffect } from 'react'
import styled from 'styled-components/macro'
import Form from './components/Form'
import FAQ from './components/FAQ'
import Button from './components/Button'
import Footer from './components/Footer'
import { VirusRedIcon } from './lib/Icons'
import { GpsIcon } from './lib/Icons'
import scrollUp from './lib/scrollUp'
import data from './data/faqData.json'

function MainPage({
    resetSearch,
    status,
    startLocating,
    isLocationAvailable,
    startSearch,
}) {
    useEffect(() => {
        resetSearch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => scrollUp(), [])

    return (
        <MainPageGrid>
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
            <Search>
                <Form status={status} startSearch={startSearch} />
                {status === 'locating' ? (
                    <GeolocationButton type="button" gray disabled>
                        <GpsIconSmall />
                        Lokalisiert...
                    </GeolocationButton>
                ) : isLocationAvailable ? (
                    <GeolocationButton type="button" onClick={startLocating}>
                        <GpsIconSmall />
                        Lass dich orten
                    </GeolocationButton>
                ) : (
                    <GeolocationButton type="button" gray disabled>
                        <GpsIconSmall />
                        Ortung nicht möglich
                    </GeolocationButton>
                )}
            </Search>

            <FAQ data={data} />
            <Footer/>
        </MainPageGrid>
    )
}

const MainPageGrid = styled.div`
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

const Search = styled.div`
    background: var(--silver);
    padding: 0 20px;
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 50px;
`

const Logo = styled(VirusRedIcon)`
    width: 120px;
`

const GeolocationButton = styled(Button)`
    width: 100%;
    border-radius: 5px;
    margin-bottom: 20px;
`

const GpsIconSmall = styled(GpsIcon)`
    margin-right: 10px;
    width: 20px;
`

export default MainPage
