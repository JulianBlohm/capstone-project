import Button from './Button'
import Input from './Input'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { useState } from 'react'


function Form({setUserPlace, errorMessage}) {
    
    const [userInput, setUserInput] = useState('')

    function handleChange(event) {
        setUserInput(event.target.value);
    }

    function handleSubmitPlace(event) {
        event.preventDefault()
        setUserPlace(userInput)
        setUserInput('')
    }
    
return (
            <FormStyled onSubmit={handleSubmitPlace}>
                <Input 
                    value={userInput}
                    onChange= {handleChange} 
                    placeholderText="Ort oder PLZ eingeben..."/>
                <span>{errorMessage}</span>
                <Button text="Suchen"/>
            </FormStyled>
)
}

Form.propTypes = {
    userInput: PropTypes.string,
    setUserInput: PropTypes.func,
    setPlace: PropTypes.func,
    errorMessage: PropTypes.string
}

const FormStyled = styled.form`
position: relative;

span {
    font-size: 0.8rem;
    color: darkred;
    position: absolute;
    left: 11px;
    top: 55px;
  }
`
export default Form