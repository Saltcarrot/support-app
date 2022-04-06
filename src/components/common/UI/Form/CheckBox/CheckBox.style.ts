import styled from 'styled-components'

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 5px;

    width: 20px;
    height: 20px;

    background-color: var(--light-lavender);

    > svg {
      width: 13px;
      height: 13px;
    }
  }
`

export default CheckBoxWrapper
