import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ReactComponent as VirusWhite } from './assets/virus-white.svg'
import styled from 'styled-components/macro'
import ExternalLink from './components/ExternalLink'
import ArrowButton from './components/ArrowButton'

function ResultPage({ setUserPlace, countyData, isCountyDataLoaded }) {
    const [countyClassification, setCountyClassification] = useState('')

    let { id } = useParams()

    useEffect(() => classifyCountyIncidence(), [countyData])
    useEffect(() => {
        !isCountyDataLoaded && setUserPlace(id)
    }, [id])

    function classifyCountyIncidence() {
        if (countyData.incidence > 35) {
            setCountyClassification('county-class-red')
        } else {
            setCountyClassification('county-class-green')
        }
    }

    return (
        <ResultPageStyled>
            {isCountyDataLoaded && (
                <>
                    <section
                        className={countyClassification + ' result-wrapper'}
                    >
                        <div className="logo-wrapper">
                            <VirusWhite className="logo" />
                        </div>
                        <div className="result-text">
                            {countyData.incidence > 35 ? (
                                <h2>
                                    {countyData.countyName} ist ein Covid-19
                                    Hotspot.
                                </h2>
                            ) : (
                                <h2>
                                    {countyData.countyName} ist kein Covid-19
                                    Hotspot.
                                </h2>
                            )}
                            <h3>
                                Die 7-Tage-Inzidenz <br /> liegt bei{' '}
                                {countyData.incidence}.
                            </h3>

                            <div className="time-stamp">
                                <span>Daten vom </span>
                                <time>{countyData.last_update}</time>
                            </div>
                        </div>

                        <footer>
                            {countyData.incidence > 35 ? (
                                <Link to="/">
                                    <ArrowButton isHotspot>
                                        Neue Suche
                                    </ArrowButton>
                                </Link>
                            ) : (
                                <Link to="/">
                                    <ArrowButton>Neue Suche</ArrowButton>
                                </Link>
                            )}
                        </footer>
                    </section>
                    <section className="external-links-wrapper">
                        <h4>Hilfreiche Links</h4>
                        <p>
                            Anbei findest du nützliche Links zu
                            vertrauenswürdigen Seiten, auf denen du dich
                            informieren kannst.
                        </p>

                        <ExternalLink
                            target="_blank"
                            href="https://www.bundesregierung.de/breg-de/themen/coronavirus/corona-bundeslaender-1745198"
                        >
                            Regeln der Bundesländer
                        </ExternalLink>
                        <ExternalLink
                            target="_blank"
                            href="https://www.bundesregierung.de/breg-de/themen/coronavirus/corona-massnahmen-1734724"
                        >
                            FAQ Bundesregierung.de
                        </ExternalLink>
                    </section>
                    <section className="information-wrapper">
                        <h4>Maßnahmen</h4>
                        <p>
                            Seit dem 02.11.20 gelten in Deutschland die
                            folgenden einheitlichen Regelungen.
                        </p>
                    </section>
                </>
            )}
        </ResultPageStyled>
    )
}

const ResultPageStyled = styled.div`
    .result-wrapper {
        padding-bottom: 20px;
    }

    .county-class-red {
        background: var(--red);
        color: var(--silver);
    }

    .county-class-green {
        background: var(--green);
        color: var(--silver);
    }

    .result-text {
        padding: 0 35px;
    }

    .external-links-wrapper {
        margin: 50px 18px;
    }

    .information-wrapper {
        margin: 50px 18px;
    }

    .logo-wrapper {
        display: flex;
        justify-content: center;
        padding-top: 40px;
        padding-bottom: 73px;
    }

    .logo {
        width: 120px;
    }

    .time-stamp {
        margin-bottom: 56px;
        font-weight: 300;
        font-size: 14px;
    }

    h2 {
        margin-bottom: 41px;
        font-size: 32px;
    }

    h3 {
        margin-bottom: 41px;
        line-height: 1.5;
        font-size: 26px;
    }

    h4 {
        font-size: 26px;
        margin-bottom: 10px;
    }

    p {
        font-weight: lighter;
        font-size: 16px;
    }

    footer {
        padding: 0 25px;
    }
`

export default ResultPage
