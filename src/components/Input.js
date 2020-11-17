import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

function Input({placeholderText}) {

    return (
        <>
            <InputStyled placeholder={placeholderText}></InputStyled>
        </>
 )
}

const InputStyled = styled.input`
width: 100%;
padding: 0 10px;
border-radius: 5px;
border: 1px solid gray;
height: 48px;
font-size: 3vw;
`

Input.propTypes = {
    placeholderText: PropTypes.string
}

export default Input