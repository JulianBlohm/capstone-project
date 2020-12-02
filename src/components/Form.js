import { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'
import Input from './Input'

function Form({ setUserPlace, errorMessage, isDataLoading, setSearchOrigin }) {
    const [userInput, setUserInput] = useState('')

    function handleChange(event) {
        setUserInput(event.target.value)
    }

    function handleSubmitPlace(event) {
        event.preventDefault()
        setUserPlace(userInput)
        setUserInput('')
        setSearchOrigin('MainPage')
    }

    return (
        <FormStyled onSubmit={handleSubmitPlace}>
            <Input
                value={userInput}
                onChange={handleChange}
                placeholder="Ort oder PLZ eingeben..."
                required="required"
            />
            <span>{errorMessage}</span>
            {userInput ? (
                <Button>Suchen</Button>
            ) : isDataLoading ? (
                <Button disabled gray>
                    Lädt...
                </Button>
            ) : (
                <Button disabled>Suchen</Button>
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
    padding: 0 13px;
    display: flex;

    span {
        font-size: 0.8rem;
        color: darkred;
        position: absolute;
        left: 11px;
        top: 55px;
    }
`
export default Form
