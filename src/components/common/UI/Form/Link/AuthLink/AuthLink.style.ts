import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinkComponent = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;

  border-radius: 5px;

  &:hover {
    background-color: var(--dark-blue);
  }
`

export default LinkComponent
