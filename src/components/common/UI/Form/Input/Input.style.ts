import styled from 'styled-components'

const Input = styled.input`
  height: 40px;
  width: 100%;

  padding: 5px;

  font-size: inherit;

  background-color: var(--light-lavender);

  border: 1px solid transparent;
  border-radius: 5px;

  &::placeholder {
    color: var(--purple-opacity-3);
  }

  &:focus,
  &:active {
    border-color: var(--purple-opacity-3);
  }
`

export default Input
