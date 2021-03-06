import styled from 'styled-components'
import { Link } from 'react-router-dom'

const RedirectWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;

  border-radius: 10px;
  border: 1px solid var(--grey-blue);

  &:hover {
    background-color: var(--grey-blue);
    color: #fff;
  }
`

export default RedirectWrapper
