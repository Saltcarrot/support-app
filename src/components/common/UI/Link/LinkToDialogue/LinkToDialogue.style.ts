import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinkToDialogueWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 40px;
  width: 200px;

  padding: 10px;

  border-radius: 10px 0 0 0;
  border: 2px solid transparent;

  &:hover {
    border-color: var(--grey-blue);
    background-color: #fff;
    color: var(--grey-blue);
  }
`

export default LinkToDialogueWrapper
