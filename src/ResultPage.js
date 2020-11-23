import styled from 'styled-components/macro'
import Button from './components/Button'
import { useState, useEffect } from 'react'

function ResultPage({countyData, resetSearch}) {

    const [countyRank, setCountyRank] = useState('')

    useEffect(() => rankCountyIncidence(), [countyData])

    function rankCountyIncidence() {
        if(countyData.incidence > 35) {
            setCountyRank('county-rank-red')
        } else {
                setCountyRank('county-rank-green')}
    }

    return (
        <ResultPageStyled>
            <section className={countyRank + " result-wrapper"}>
                {countyData.incidence > 35 ? 
                <h2> {countyData.countyName} ist ein Covid-19 Hotspot.</h2> :
                <h2> {countyData.countyName} ist kein Covid-19 Hotspot.</h2> 
                }
                <h3>Die 7-Tage-Inzidenz <br/> liegt bei {countyData.incidence}. </h3>
                <span>Daten vom {countyData.last_update}</span>

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

.county-rank-red {
    background: var(--red);
    color: var(--silver);
}

.county-rank-green {
    background: var(--green);
    color: var(--silver);
}

.information-wrapper {
    margin: 0 18px;
}
`

export default ResultPage