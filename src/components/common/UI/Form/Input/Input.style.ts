import styled from 'styled-components'

const Input = styled.input`
  height: 40px;
  width: 100%;

  padding: 5px;

  font-size: inherit;

  background-color: transparent;

  border: 1px solid transparent;
  border-radius: 5px;

  &.auth {
    background-color: var(--white-opacity-2);
    color: #fff;

    &::placeholder {
      color: var(--white-opacity-3);
    }

    &:hover,
    &:focus {
      background-color: var(--white-opacity-3);
    }
  }
`

export default Input
