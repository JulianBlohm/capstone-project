import styled from 'styled-components/macro'
import Button from './components/Button'

function ErrorPage({ setErrorMessage, showMainPage }) {
    function resetError() {
        setErrorMessage('')
        showMainPage()
    }

    return (
        <ErrorPageStyled>
            <section className="result-wrapper">
                <h3>Sorry, Daten konnten nicht geladen werden.</h3>
                <span>Probiere eine neue Suche!</span>
            </section>
            <section className="information-wrapper">
                <Button onClick={resetError}>Neue Suche</Button>
            </section>
        </ErrorPageStyled>
    )
}

const ErrorPageStyled = styled.div`
    .result-wrapper {
        padding: 37px;
        background: var(--primary-red);
        color: var(--silver);
    }

    .information-wrapper {
        margin: 0 18px;
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
export default ErrorPage
