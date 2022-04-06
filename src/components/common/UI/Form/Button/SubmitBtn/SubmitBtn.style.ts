import styled from 'styled-components'

const SubmitBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 30px;

  button {
    height: 50px;
    width: 200px;

    background-color: var(--purple);
    color: #fff;

    &:hover {
      background-color: var(--purple-opacity-6);
    }
  }
`

export default SubmitBtnWrapper
