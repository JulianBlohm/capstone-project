import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

function Button({ text, onClick }) {
    return (
        <>
            <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
        </>
    )
}

const ButtonStyled = styled.button`
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
`

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default Button
