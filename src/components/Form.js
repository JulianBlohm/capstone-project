import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'
import Input from './Input'
import { CrossIcon } from '../lib/Icons'

function Form({ userPlace, setUserPlace, status }) {
    const [userInput, setUserInput] = useState('')
    const [validation, setValidation] = useState(true)

    useEffect(() => setValidation(true), [userInput])

    function handleChange(event) {
        setUserInput(event.target.value)
    }

    function handleSubmitPlace(event) {
        event.preventDefault()
        if (validateInput()) {
            userInput === userPlace
                ? setUserPlace(userInput + ' ')
                : setUserPlace(userInput.trim())
            setUserInput('')
        } else {
            setValidation(false)
        }
    }

    function validateInput() {
        const regexCountyCode = /[0-9]/g
        const regexPlaceName = /[^a-z-\s]/gi

        if (!regexPlaceName.test(userInput)) {
            return userInput.length >= 2 && userInput.length <= 32
        } else {
            return regexCountyCode.test(userInput) && userInput.length === 5
        }
    }

    return (
        <FormStyled onSubmit={handleSubmitPlace}>
            <Input
                value={userInput}
                onChange={handleChange}
                placeholder="Ort oder PLZ eingeben..."
                required="required"
            />
            <ButtonStyled type="button">
                <CrossIconStyled />
            </ButtonStyled>

            {!validation && (
                <ErrorMessage>Ortsname oder PLZ eingeben</ErrorMessage>
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

const ButtonStyled = styled(Button)`
    background: transparent;
    border-radius: 0;
    position: absolute;
    left: 223px;
    top: 0;
    width: 10%;
`

const CrossIconStyled = styled(CrossIcon)`
    width: 25px;
    stroke: var(--gray);
`

Form.propTypes = {
    userInput: PropTypes.string,
    setUserInput: PropTypes.func,
    setPlace: PropTypes.func,
    errorMessage: PropTypes.string,
}

export default Form
