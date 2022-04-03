import styled from 'styled-components'

const Button = styled.button`
  height: 50px;

  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-color: var(--grey-blue);

  > svg {
    margin-left: 5px;

    font-size: 20px;
  }

  &:hover {
    background-color: var(--grey-blue);
    color: #fff;
  }
`

export default Button
