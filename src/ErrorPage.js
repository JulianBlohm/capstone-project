import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from './components/Button'
import { VirusWhiteIcon } from './lib/Icons'

function ErrorPage({ resetSearch }) {
    const history = useHistory()

    function newSearch() {
        resetSearch()
        history.push('/')
    }

    return (
        <>
            <Result>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <Heading>Sorry, Daten konnten nicht geladen werden.</Heading>
                <SubHeading>Probiere eine neue Suche!</SubHeading>
            </Result>
            <Navigation>
                <FullWidthButton onClick={newSearch}>
                    Neue Suche
                </FullWidthButton>
            </Navigation>
        </>
    )
}

const FullWidthButton = styled(Button)`
    border-radius: 5px;
    width: 100%;
    margin-top: 20px;
`

const Result = styled.section`
    padding: 0 37px 37px 37px;
    background: var(--primary-red);
    color: var(--silver);
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

const Navigation = styled.nav`
    margin: 0 18px;
`

const Heading = styled.h3`
    margin-bottom: 24px;
    line-height: 1.5;
    font-size: 1.625rem;
`

const SubHeading = styled.span`
    font-weight: bold;
    font-size: 1rem;
    color: var(--secondary-red);
`

export default ErrorPage
