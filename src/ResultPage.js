import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from './components/Button'

function ResultPage({countyData}) {

    const [countyClassification, setCountyClassification] = useState('')

    useEffect(() => classifyCountyIncidence(), [countyData])

    function classifyCountyIncidence() {
        if(countyData.incidence > 35) {
            setCountyClassification('county-class-red')
        } else {
            setCountyClassification('county-class-green')}
    }

    return (
        <ResultPageStyled>
            <section className={countyClassification + " result-wrapper"}>
                {countyData.incidence > 35 ? 
                <h2> {countyData.countyName} ist ein Covid-19 Hotspot.</h2> :
                <h2> {countyData.countyName} ist kein Covid-19 Hotspot.</h2> 
                }
                <h3>Die 7-Tage-Inzidenz <br/> liegt bei {countyData.incidence}. </h3>
                <span>Daten vom {countyData.last_update}</span>
            </section>
            <section className="information-wrapper">
                <a href="https://www.bundesregierung.de/breg-de/themen/coronavirus/corona-bundeslaender-1745198">
                    <Button text="Regeln der Bundesländer"/>
                </a>
                <a href="https://www.bundesregierung.de/breg-de/themen/coronavirus/corona-massnahmen-1734724">
                    <Button text="FAQ Bundesregierung.de"/>
                </a>
                <Link to="/"><Button text="Neue Suche"/></Link>
            </section>
        </ResultPageStyled>
    )
}

const ResultPageStyled = styled.div`

h2 {
    margin-bottom: 46px;
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

a {
    text-decoration: none;
}

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