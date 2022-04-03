import styled from 'styled-components'

const Div = styled.div`
  padding: 10px;
  margin-top: 10px;

  border-radius: 5px;

  text-align: center;

  &.success {
    background-color: var(--success);
  }
  &.error {
    background-color: var(--error);
  }
  &.info {
    background-color: var(--info);
  }
`

export default Div
