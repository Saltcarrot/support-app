import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 50px;

  > * {
    width: calc(50% - 5px);
  }
`

export default Div
