import styled from 'styled-components'

const InputWrapper = styled.input`
  width: 100%;

  font-size: inherit;

  background-color: var(--light-grey);

  border: 1px solid transparent;
  border-radius: 5px;

  &::placeholder {
    color: var(--purple-opacity-3);
  }

  &:focus,
  &:active {
    border-color: var(--purple-opacity-3);
  }

  &:not([type='file']) {
    height: 40px;
    padding: 5px;
  }

  &[type='file'] {
    width: 175px;

    padding: 0;
    margin-left: 10px;

    border-color: transparent;
    background-color: transparent;
    color: transparent;

    &::-webkit-file-upload-button {
      visibility: hidden;
    }

    &::before {
      display: inline-block;

      content: 'Выберите изображение';

      padding: 10px;

      border-radius: 10px;

      background: var(--purple);
      color: #fff;

      font-family: var(--font-nunito);
      font-weight: bold;
      font-size: 10pt;
      white-space: nowrap;

      -webkit-user-select: none;

      cursor: pointer;

      transition: background-color 0.4s ease;
    }

    &:active {
      outline: 0;
    }

    &:hover::before {
      background-color: var(--purple-opacity-6);
    }
  }
`

export default InputWrapper
