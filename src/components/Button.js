import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

function Button({text}) {

    return (
        <>
            <ButtonStyled>{text}</ButtonStyled>
        </>
 )
}

const ButtonStyled = styled.button`
border: none;
background: var(--button);
color: white;
width: 100%;
display: flex;
height: 48px;
justify-content: center;
align-items: center;
font-size: 1.5rem;
border-radius: 5px;
margin: 20px 0 ;
`

Button.propTypes = {
    text: PropTypes.string
}

export default Button