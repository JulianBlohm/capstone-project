import { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'
import Input from './Input'

function Form({ userPlace, setUserPlace, isError, isDataLoading }) {
    const [userInput, setUserInput] = useState('')

    function handleChange(event) {
        setUserInput(event.target.value)
    }

    function handleSubmitPlace(event) {
        event.preventDefault()
        setUserPlace({ ...userPlace, new: userInput }) //funktioniert so noch nicht
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
            {isError && (
                <ErrorMessage>Daten konnten nicht geladen werden</ErrorMessage>
            )}
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
    padding: 0 20px 20px 20px;
    display: flex;
`
const ErrorMessage = styled.span`
    font-size: 0.8rem;
    color: darkred;
    position: absolute;
    left: 32px;
    top: 49px;
`
export default Form
