import { forwardRef } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const Input = forwardRef((props, ref) => (
    <InputStyled
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        required={props.required}
        ref={ref}
    />
))

const InputStyled = styled.input`
    width: 100%;
    position: relative;
    padding-left: 10px;
    padding-right: 35%;
    border-radius: 5px;
    border: 1px solid var(--gray);
    height: 48px;
    font-size: 1rem;
    outline: var(--blue);
`

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
}

export default Input
