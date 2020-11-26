import styled from 'styled-components/macro'
import Button from './components/Button'

function ErrorPage({ setErrorMessage, showMainPage }) {
    function handleClick() {
        setErrorMessage('')
        showMainPage()
    }

    return (
        <ErrorPageStyled>
            <section className="county-class-red result-wrapper">
                <h3>Sorry, Daten konnten nicht geladen werden.</h3>
                <span>Probiere eine neue Suche!</span>
            </section>
            <section className="information-wrapper">
                <Button text="Neue Suche" onClick={handleClick} />
            </section>
        </ErrorPageStyled>
    )
}

const ErrorPageStyled = styled.div`
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
        background: var(--red);
        color: var(--silver);
    }

    .information-wrapper {
        margin: 0 18px;
    }
`
export default ErrorPage
