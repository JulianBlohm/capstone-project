import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from './components/Button'
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
                        <span>Daten vom {countyData.last_update}</span>
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
        padding: 37px;
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
`

export default ResultPage
