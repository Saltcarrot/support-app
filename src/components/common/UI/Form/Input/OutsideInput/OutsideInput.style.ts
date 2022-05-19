import styled from 'styled-components'

const OutsideInputWrapper = styled.input`
  border-color: var(--purple-opacity-3);

  background-color: #fff;

  &:focus,
  &:active {
    border-color: var(--purple-opacity-6);
  }
`

export default OutsideInputWrapper
