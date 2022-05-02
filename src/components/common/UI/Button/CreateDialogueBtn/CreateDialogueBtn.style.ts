import styled from 'styled-components'

const CreateDialogueBtnWrapper = styled.button`
  display: flex;
  align-items: center;

  padding: 5px;

  background-color: #fff;
  color: var(--purple);

  box-shadow: var(--card-box-opacity-1);

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    margin-right: 5px;

    border-radius: 5px;

    background-color: var(--light-purple);

    transition: background-color 0.4s ease;
  }
`

export default CreateDialogueBtnWrapper
