import styled from 'styled-components/macro'
import { ExternalLinkIcon } from '../lib/Icons'

function ExternalLink({ children, target, href }) {
    return (
        <ExternalLinkStyled target={target} href={href}>
            <ExternalLinkIconStyled />
            <Text>{children}</Text>
        </ExternalLinkStyled>
    )
}

const ExternalLinkStyled = styled.a`
    border: none;
    background: var(--blue);
    color: white;
    width: 100%;
    display: flex;
    height: 48px;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 300;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ExternalLinkIconStyled = styled(ExternalLinkIcon)`
    height: auto;
    width: 16px;
    fill: var(--silver);
    margin-right: 10px;
`

const Text = styled.span`
margin-bottom: 3px;
`

export default ExternalLink
