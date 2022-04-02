import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 5px;

    width: 20px;
    height: 20px;

    background-color: var(--white-opacity-2);
    color: #fff;

    transition: background-color 0.4s ease, color 0.4s ease;

    &:hover {
      background-color: var(--white-opacity-3);
    }

    > svg {
      width: 13px;
      height: 13px;
    }
  }
`

export default Div
