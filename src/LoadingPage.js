import styled from 'styled-components/macro'
import LoadingSpinner from './components/LoadingSpinner'

function LoadingPage() {
    return (
        <LoadingContainer>
            <LoadingSpinner />
        </LoadingContainer>
    )
}

const LoadingContainer = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
`

export default LoadingPage
