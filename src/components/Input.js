import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const InputStyled = styled.input`
    width: 100%;
    padding: 0 10px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top: 1px solid var(--gray);
    border-bottom: 1px solid var(--gray);
    border-left: 1px solid var(--gray);
    border-right: 1px solid white;
    height: 48px;
    font-size: 16px;
    margin-bottom: 40px;
    outline: var(--blue);
`

const Input = (props) => <InputStyled {...props} />

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
}

export default Input
