import styled from 'styled-components'

const CreateDialogueBtnWrapper = styled.button`
  padding: 5px;

  border-radius: 10px;

  background-color: #fff;

  box-shadow: var(--card-box-opacity-1);

  span {
    padding: 5px;
    margin-right: 5px;

    border-radius: 5px;

    background-color: var(--light-purple);

    transition: background-color 0.4s ease;
  }

  &:hover {
    span {
      background-color: var(--dark-blue);
      color: #fff;
    }
  }
`

export default CreateDialogueBtnWrapper
