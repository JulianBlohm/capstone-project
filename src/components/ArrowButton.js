import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { ReactComponent as Arrow } from '../assets/arrow-left.svg'

function ArrowButton({ children, hotspot, onClick }) {
    return (
        <ArrowButtonStyled hotspot={hotspot} onClick={onClick}>
            <Arrow hotspot={hotspot} className="arrow" />
            <span>{children}</span>
        </ArrowButtonStyled>
    )
}
const ArrowButtonStyled = styled.button`
    border: none;
    background: var(--silver);
    color: ${(props) =>
        props.hotspot ? 'var(--primary-red)' : 'var(--primary-green)'};
    border-radius: 5px;
    padding: 5px 0 5px 18px;
    width: 154px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1rem;
    position: relative;
    cursor: pointer;

    .arrow {
        position: absolute;
        left: 5px;
        fill: ${(props) =>
            props.hotspot ? 'var(--primary-red)' : 'var(--primary-green)'};
    }
`
ArrowButton.propTypes = {
    children: PropTypes.string.isRequired,
    hotspot: PropTypes.bool,
    onClick: PropTypes.func,
}

export default ArrowButton
