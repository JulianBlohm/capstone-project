import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ReactComponent as VirusWhite } from './assets/virus-white.svg'
import styled from 'styled-components/macro'
import Button from './components/Button'
import ExternalLink from './components/ExternalLink'
import NewSearchButton from './components/NewSearchButton'

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
                        {countyData.incidence > 35 ? (
                            <NewSearchButton isHotspot />
                        ) : (
                            <NewSearchButton />
                        )}
                    </section>
                    <section className="information-wrapper">
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
                        <Link to="/">
                            <Button>Neue Suche</Button>
                        </Link>
                    </section>
                </>
            )}
        </ResultPageStyled>
    )
}

const ResultPageStyled = styled.div`
    .result-wrapper {
        padding: 0 37px 20px 37px;
    }

    .county-class-red {
        background: var(--red);
        color: var(--silver);
    }

    .county-class-green {
        background: var(--green);
        color: var(--silver);
    }

    .information-wrapper {
        margin: 0 18px;
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

    span {
        font-weight: 300;
    }
`

export default ResultPage
