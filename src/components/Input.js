import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

function Input({value, onChange, placeholderText}) {

    return (
        <>
            <InputStyled 
                value={value} 
                onChange={onChange} 
                placeholder={placeholderText}>
            </InputStyled>
        </>
 )
}

const InputStyled = styled.input`
width: 100%;
padding: 0 10px;
border-radius: 5px;
border: 1px solid gray;
height: 48px;
font-size: 115%;
`

Input.propTypes = {
    value: PropTypes.string ,
    onChange: PropTypes.func,
    placeholderText: PropTypes.string
}

export default Input