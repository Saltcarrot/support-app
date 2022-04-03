import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinkComponent = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`

export default LinkComponent
