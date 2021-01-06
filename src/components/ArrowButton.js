import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { ArrowIcon } from '../lib/Icons'

function ArrowButton({ children, hotspot, onClick }) {
    return (
        <ArrowButtonStyled hotspot={hotspot} onClick={onClick}>
            <ArrowStyled hotspot={hotspot && 'hotspot'} />
            <span>{children}</span>
        </ArrowButtonStyled>
    )
}

const ArrowButtonStyled = styled.button`
    border: none;
    background: var(--silver);
    color: ${(props) =>
        props.hotspot === 'highHotspot' ? 'var(--primary-dark-red)' : props.hotspot === 'hotspot' ?  'var(--primary-red)' : 'var(--primary-green)'};
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
`

const ArrowStyled = styled(ArrowIcon)`
    position: absolute;
    left: 5px;
    fill: ${(props) =>
        props.hotspot === 'highHotspot' ? 'var(--primary-dark-red)' : props.hotspot === 'hotspot' ?  'var(--primary-red)' : 'var(--primary-green)'};
`

ArrowButton.propTypes = {
    children: PropTypes.string.isRequired,
    hotspot: PropTypes.string,
    onClick: PropTypes.func,
}

export default ArrowButton
