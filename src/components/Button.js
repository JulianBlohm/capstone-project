import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

function Button({children}) {

    return (
        <>
            <ButtonStyled>{children}</ButtonStyled>
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
font-size: 4vw;
border-radius: 5px;
`

Button.propTypes = {
    children: PropTypes.string
}

export default Button