import styled from 'styled-components'

const Div = styled.div`
  padding: 10px;
  margin-top: 10px;

  border-radius: 5px;

  text-align: center;

  &.success {
    background-color: green;
  }
  &.error {
    background-color: pink;
  }
  &.info {
    background-color: cyan;
  }
`

export default Div
