import styled from 'styled-components/macro'
import { ReactComponent as Arrow } from '../assets/arrow-left.svg'

function NewSearchButton({ isHotspot }) {
    return (
        <NewSearchButtonStyled isHotspot={isHotspot}>
            <Arrow className="arrow" />
            Neue Suche
        </NewSearchButtonStyled>
    )
}

const NewSearchButtonStyled = styled.button`
    background: var(--silver);
    color: ${(props) => (props.isHotspot ? 'var(--red)' : 'var(--green)')};
    border: none;
    border-radius: 5px;
    padding: 5px 0 5px 18px;
    width: 154px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 16px;
    position: relative;

    .arrow {
        fill: ${(props) => (props.isHotspot ? 'var(--red)' : 'var(--green)')};
        position: absolute;
        left: 5px;
    }
`

export default NewSearchButton
