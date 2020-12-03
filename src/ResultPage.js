import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ReactComponent as VirusWhite } from './assets/virus-white.svg'
import { ReactComponent as Arrow } from './assets/arrow-left.svg'
import styled from 'styled-components/macro'
import ExternalLink from './components/ExternalLink'

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
                                <>
                                    <h2 className="hotspot">
                                        {countyData.countyName} ist ein Covid-19
                                        Hotspot.
                                    </h2>
                                    <h3>
                                        Die 7-Tage-Inzidenz <br /> liegt bei{' '}
                                        {countyData.incidence}.
                                    </h3>
                                    <div className="time-stamp hotspot">
                                        <span>Daten vom </span>
                                        <time>{countyData.last_update}</time>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h2>
                                        {countyData.countyName} ist kein
                                        Covid-19 Hotspot.
                                    </h2>
                                    <h3>
                                        Die 7-Tage-Inzidenz <br /> liegt bei{' '}
                                        {countyData.incidence}.
                                    </h3>
                                    <div className="time-stamp">
                                        <span>Daten vom </span>
                                        <time>{countyData.last_update}</time>
                                    </div>
                                </>
                            )}
                        </div>

                        <footer>
                            {countyData.incidence > 35 ? (
                                <Link className="new-search red" to="/">
                                    <Arrow className="arrow" />
                                    <span>Neue Suche</span>
                                </Link>
                            ) : (
                                <Link className="new-search green" to="/">
                                    <Arrow className="arrow" />
                                    <span>Neue Suche</span>
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
                        <div className="external-links">
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
                        </div>
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
    h2 {
        margin-bottom: 21px;
        line-height: 1.2;
        font-size: 32px;
        color: var(--secondary-green);
    }

    h3 {
        margin-bottom: 24px;
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

    .result-wrapper {
        padding-bottom: 20px;
    }

    .county-class-red {
        background: var(--primary-red);
        color: var(--silver);
    }

    .county-class-green {
        background: var(--primary-green);
        color: var(--silver);
    }

    .result-text {
        padding: 0 30px;
        margin-bottom: 105px;
    }

    .external-links-wrapper {
        margin: 50px 18px;
    }

    .external-links {
        display: grid;
        grid-gap: 20px;
        margin-top: 20px;
    }

    .information-wrapper {
        margin: 50px 18px;
    }

    .logo-wrapper {
        display: flex;
        justify-content: center;
        padding-top: 40px;
        padding-bottom: 97px;
    }

    .logo {
        width: 120px;
    }

    .time-stamp {
        font-weight: bold;
        font-size: 16px;
        color: var(--secondary-green);
    }

    .new-search {
        background: var(--silver);
        border: none;
        border-radius: 5px;
        padding: 5px 0 5px 18px;
        width: 154px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 16px;
        position: relative;
    }

    .green {
        color: var(--primary-green);
        fill: var(--primary-green);
    }

    .red {
        color: var(--primary-red);
        fill: var(--primary-red);
    }

    .arrow {
        position: absolute;
        left: 5px;
    }

    .new-search span {
        margin-top: 3px;
    }

    .hotspot {
        color: var(--secondary-red);
        fill: var(--secondary-red);
    }
`

export default ResultPage
