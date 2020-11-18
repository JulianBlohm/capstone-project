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
background: #0B79B9;
color: white;
width: 100%;
display: flex;
height: 48px;
justify-content: center;
align-items: center;
font-size: 150%;
border-radius: 5px;
margin: 20px 0 ;
`

Button.propTypes = {
    children: PropTypes.string
}

export default Button