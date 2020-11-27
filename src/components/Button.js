import styled from 'styled-components/macro'

export default styled.button`
    border: none;
    background: ${(props) => (props.disabled ? 'var(--gray)' : 'var(--blue)')};
    color: white;
    width: 100%;
    display: flex;
    height: 48px;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    border-radius: 5px;
    margin: 20px 0;
    cursor: pointer;
`
