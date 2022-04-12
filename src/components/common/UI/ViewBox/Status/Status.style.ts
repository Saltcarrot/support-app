import styled from 'styled-components'

const StatusWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: auto;

  height: 35px;
  width: 35px;

  border-radius: 20px;

  &.opened {
    background-color: var(--light-cyan);
    color: var(--cyan);
  }
  &.active {
    background-color: var(--light-yellow);
    color: var(--yellow);
  }
  &.closed {
    background-color: var(--light-red);
    color: var(--red);
  }
`

export default StatusWrapper
