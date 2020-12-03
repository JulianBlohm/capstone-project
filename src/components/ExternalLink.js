import styled from 'styled-components/macro'
import { ReactComponent as ExternalLinkIcon } from '../assets/external-link.svg'

function ExternalLink({ children }) {
    return (
        <ExternalLinkStyled>
            <ExternalLinkIcon className="external-link-icon" />
            <span>{children}</span>
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
    font-size: 16px;
    font-weight: 300;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    .external-link-icon {
        height: auto;
        width: 16px;
        fill: var(--silver);
        margin-right: 10px;
    }
`
export default ExternalLink
