import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:first-of-type) {
    margin-top: 20px;
  }
`

export default Div
