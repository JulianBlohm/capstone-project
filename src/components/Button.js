import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const ButtonStyled = styled.button`
    border: none;
    background: ${(props) => (props.gray ? 'var(--gray)' : 'var(--blue)')};
    color: white;
    width: 25%;
    display: flex;
    height: 48px;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
`
const Button = (props) => <ButtonStyled {...props} />

Button.propTypes = {
    disabled: PropTypes.bool,
    children: PropTypes.string.isRequired,
}

export default Button
