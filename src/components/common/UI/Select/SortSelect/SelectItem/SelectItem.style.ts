import styled from 'styled-components'

const SelectItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5px 10px;

  cursor: pointer;

  svg {
    color: var(--grey-blue);
  }

  &:hover,
  &:focus {
    background-color: var(--light-lavender);

    &:first-of-type {
      border-radius: 5px 5px 0 0;
    }
    &:last-of-type {
      border-radius: 0 0 5px 5px;
    }
  }
  &:active {
    background-color: var(--purple-opacity-3);
  }
`

export default SelectItemWrapper
