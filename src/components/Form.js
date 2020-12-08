import { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'
import Input from './Input'

function Form({ userPlace, setUserPlace, status }) {
    const [userInput, setUserInput] = useState('')

    function handleChange(event) {
        setUserInput(event.target.value)
    }

    function handleSubmitPlace(event) {
        event.preventDefault()
        userInput === userPlace
            ? setUserPlace(userInput + ' ')
            : setUserPlace(userInput)
        setUserInput('')
    }

    return (
        <FormStyled onSubmit={handleSubmitPlace}>
            <Input
                value={userInput}
                onChange={handleChange}
                placeholder="Ort oder PLZ eingeben..."
                required="required"
            />
            {status === 'error' && (
                <ErrorMessage>Daten konnten nicht geladen werden</ErrorMessage>
            )}
            {userInput ? (
                <InputButton>Suchen</InputButton>
            ) : status === 'loading' ? (
                <InputButton disabled gray>
                    Lädt...
                </InputButton>
            ) : (
                <InputButton disabled>Suchen</InputButton>
            )}
        </FormStyled>
    )
}

Form.propTypes = {
    userInput: PropTypes.string,
    setUserInput: PropTypes.func,
    setPlace: PropTypes.func,
    errorMessage: PropTypes.string,
}

const FormStyled = styled.form`
    position: relative;
    background: var(--silver);
    padding: 0 20px 20px 20px;
`

const ErrorMessage = styled.span`
    font-size: 0.8rem;
    color: var(--primary-red);
    position: absolute;
    left: 32px;
    top: 49px;
`

const InputButton = styled(Button)`
    position: absolute;
    top: 0;
    right: 20px;
`

export default Form
