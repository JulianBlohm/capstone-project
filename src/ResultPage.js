import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import ExternalLink from './components/ExternalLink'
import ArrowButton from './components/ArrowButton'
import data from './data/measures.json'
import { VirusWhiteIcon } from './lib/Icons'
import scrollUp from './lib/scrollUp'

function ResultPage({ startSearch, countyData, status }) {
    const [countyClassification, setCountyClassification] = useState('')
    const [measures, setMeasures] = useState([])

    const history = useHistory()

    let { id } = useParams()
    
    useEffect(() => setMeasures(data), [])
    useEffect(() => scrollUp(), [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => classifyCountyIncidence(), [countyData])
    useEffect(() => {
        status !== 'loaded' && startSearch(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])


    function classifyCountyIncidence() {
        if (countyData.incidence < 35) {
            setCountyClassification('noHotspot')
        } else if (countyData.incidence < 200) {
            setCountyClassification('hotspot')
        } else {setCountyClassification('highHotspot')}
    }

    function showMainPage() {
        history.push('/')
    }

    return (
        <>
            {status === 'loaded' && (
                <>
                    <Result hotspot={countyClassification}>
                        <LogoContainer>
                            <Logo />
                        </LogoContainer>
                        <ResultTextWrapper>
                            {countyData.incidence > 35 ? (
                                <>
                                    <Heading hotspot={countyClassification}>
                                        {countyData.countyName} ist ein Covid-19
                                        Hotspot.
                                    </Heading>
                                    <SubHeading>
                                        Die 7-Tage-Inzidenz <br /> liegt bei{' '}
                                        {countyData.incidence}.
                                    </SubHeading>
                                    <DataDate hotspot={countyClassification}>
                                        <span>Daten vom </span>
                                        <time>{countyData.last_update}</time>
                                    </DataDate>
                                </>
                            ) : (
                                <>
                                    <Heading>
                                        {countyData.countyName} ist kein
                                        Covid-19 Hotspot.
                                    </Heading>
                                    <SubHeading>
                                        Die 7-Tage-Inzidenz <br /> liegt bei{' '}
                                        {countyData.incidence}.
                                    </SubHeading>
                                    <DataDate>
                                        <span>Daten vom </span>
                                        <time>{countyData.last_update}</time>
                                    </DataDate>
                                </>
                            )}
                        </ResultTextWrapper>

                        <Navigation>
                            {countyData.incidence < 35 && (
                                <ArrowButton onClick={showMainPage}>
                                    Neue Suche
                                </ArrowButton>
                            )}
                            {countyData.incidence > 35 && (
                                <ArrowButton hotspot={'hotspot'} onClick={showMainPage}>
                                    Neue Suche
                                </ArrowButton>
                            )}
                            {countyData.incidence > 200 && (
                                <ArrowButton hotspot={'highHotspot'} onClick={showMainPage}>
                                    Neue Suche
                                </ArrowButton>
                            )}
                        </Navigation>
                    </Result>
                    <InformationLinks>
                        <InformationHeading>
                            Hilfreiche Links
                        </InformationHeading>
                        <Explanation>
                            Anbei findest du nützliche Links zu
                            vertrauenswürdigen Seiten, auf denen du dich
                            informieren kannst.
                        </Explanation>
                        <ExternalLinks>
                            <ExternalLink
                                target="_blank"
                                href="https://www.bundesregierung.de/breg-de/themen/coronavirus/corona-massnahmen-1734724"
                            >
                                Infos Bundesregierung.de
                            </ExternalLink>
                            <ExternalLink
                                target="_blank"
                                href="https://www.bundesregierung.de/breg-de/themen/coronavirus/corona-bundeslaender-1745198"
                            >
                                Regeln der Bundesländer
                            </ExternalLink>
                        </ExternalLinks>
                    </InformationLinks>
                    <Information>
                        <InformationHeading>Maßnahmen</InformationHeading>
                        <Explanation>
                            Seit dem 16.12.20 gelten in Deutschland die
                            folgenden einheitlichen Regelungen. Diese können in
                            Außnahmefällen regional verschärft werden, deshalb
                            informiere dich auch bei deinem Gesundheitsamt.
                        </Explanation>
                        <Explanation>
                            Alle bis zum 10. Januar befristeten Maßnahmen werden 
                            bis zum 31. Januar 2021 verlängert - auch die Einschränkungen
                            des Schulbetriebs und der Kindertagesstätten.
                        </Explanation>
                        {countyData.incidence > 200 && (
                        <Explanation highHotspot>
                            Ab dem 11. Januar gilt für Landkreise mit einer 7-Tages-Inzidenz 
                            über 200 eine Beschränkung des Bewegungsradius auf 15km um den 
                            Wohnort, sofern kein triftiger Grund vorliegt.
                        </Explanation>
                        )}
                        <MeasureList>
                            {measures.map((measure) => (
                                <li key={measure.id}>
                                    <MeasureHeading>
                                        {measure.heading}
                                    </MeasureHeading>
                                    <Explanation>{measure.text}</Explanation>
                                </li>
                            ))}
                        </MeasureList>
                    </Information>
                </>
            )}
        </>
    )
}

const Heading = styled.h1`
    margin-bottom: 21px;
    line-height: 1.2;
    font-size: 2rem;
    color: ${(props) =>
        props.hotspot === 'highHotspot' ? 'var(--primary-red)' : props.hotspot === 'hotspot' ?  'var(--secondary-red)' : 'var(--secondary-green)'};
`

const SubHeading = styled.h2`
    margin-bottom: 24px;
    line-height: 1.5;
    font-size: 1.625rem;
`

const InformationHeading = styled.h3`
    font-size: 1.625rem;
`

const Explanation = styled.p`
    font-size: 1rem;
    color: ${(props) => props.highHotspot ? 'var(--primary-red)' : 'var(--gray)'};
    margin: 20px 0;
`

const Navigation = styled.nav`
    padding: 0 20px;
`

const Result = styled.section`
    padding-bottom: 20px;
    background: ${(props) =>
        props.hotspot === 'highHotspot' ? 'var(--primary-dark-red)' : props.hotspot === 'hotspot' ?  'var(--primary-red)' : 'var(--primary-green)'};
    color: var(--silver);
`

const ResultTextWrapper = styled.div`
    padding: 0 30px;
    margin-bottom: 50px;
`

const InformationLinks = styled.section`
    margin: 70px 30px;
`

const ExternalLinks = styled.div`
    display: grid;
    grid-gap: 20px;
`

const Information = styled.section`
    margin: 70px 30px;
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 50px;
`

const Logo = styled(VirusWhiteIcon)`
    width: 120px;
`

const DataDate = styled.div`
    font-weight: bold;
    font-size: 1rem;
    color: ${(props) =>
        props.hotspot === 'highHotspot' ? 'var(--primary-red)' : props.hotspot === 'hotspot' ?  'var(--secondary-red)' : 'var(--secondary-green)'};
`

const MeasureList = styled.ul`
    list-style: none;
    display: grid;
    grid-gap: 40px;
    margin: 50px 0;
`

const MeasureHeading = styled.h4`
    font-size: 1rem;
`

export default ResultPage
