import styled from 'styled-components'

const StartDialogueBtnWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 10px;

  font-weight: normal;

  border-radius: 10px 0 10px 10px;
  border: 2px solid transparent;

  &:hover {
    border-color: var(--grey-blue);
    background-color: #fff;
    color: var(--grey-blue);
  }
`

export default StartDialogueBtnWrapper
