import styled from 'styled-components'

const Button = styled.button`
  height: 50px;

  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-color: #fff;
  color: #fff;

  > svg {
    margin-left: 5px;

    font-size: 24px;
  }

  &:hover {
    background-color: #fff;
    color: var(--dark-grey);
  }
`

export default Button
