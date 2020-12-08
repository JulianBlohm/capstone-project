import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const InputStyled = styled.input`
    width: 100%;
    position: relative;
    padding-left: 10px;
    padding-right: 30%;
    border-radius: 5px;
    border: 1px solid var(--gray);
    height: 48px;
    font-size: 1rem;
    outline: var(--blue);
`

const Input = (props) => <InputStyled {...props} />

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
}

export default Input
