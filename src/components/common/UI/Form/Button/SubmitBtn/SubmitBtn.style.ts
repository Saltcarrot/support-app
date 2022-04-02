import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 30px;

  button {
    height: 50px;
    width: 200px;

    border-color: #fff;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: var(--dark-grey);
    }
  }
`

export default Div
