import styled from 'styled-components/macro'
import Button from './components/Button'

function ErrorPage({ resetSearch, showMainPage }) {
    function NewSearch() {
        resetSearch()
        showMainPage()
    }

    return (
        <ErrorPageStyled>
            <Result>
                <Heading>Sorry, Daten konnten nicht geladen werden.</Heading>
                <SubHeading>Probiere eine neue Suche!</SubHeading>
            </Result>
            <Navigation>
                <Button onClick={NewSearch}>Neue Suche</Button>
            </Navigation>
        </ErrorPageStyled>
    )
}

const ErrorPageStyled = styled.div`
    button {
        border-radius: 5px;
        width: 100%;
        margin-top: 20px;
    }
`
const Result = styled.section`
    padding: 37px;
    background: var(--primary-red);
    color: var(--silver);
`

const Navigation = styled.nav`
    margin: 0 18px;
`

const Heading = styled.h3`
    margin-bottom: 41px;
    line-height: 1.5;
    font-size: 1.625rem;
`

const SubHeading = styled.span`
    font-weight: 300;
`

export default ErrorPage
