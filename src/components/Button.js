import styled from 'styled-components/macro'

export default styled.button`
    border: none;
    background: ${(props) => (props.gray ? 'var(--gray)' : 'var(--blue)')};
    color: white;
    width: 35%;
    display: flex;
    height: 48px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-bottom: 20px;
    cursor: pointer;
`
