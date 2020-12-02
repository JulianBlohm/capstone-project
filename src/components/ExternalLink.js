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
    font-size: 1rem;
    border-radius: 5px;
    margin: 20px 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        margin-top: 4px;
    }

    .external-link-icon {
        width: 16px;
        fill: var(--silver);
        margin-right: 10px;
    }
`
export default ExternalLink
