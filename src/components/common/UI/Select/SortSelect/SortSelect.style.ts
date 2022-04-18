import styled from 'styled-components'

export const SortSelectContainerWrapper = styled.div`
  position: relative;

  margin-left: auto;

  width: 100px;

  font-family: var(--font-nunito);
  font-weight: bold;

  color: var(--purple);
`

export const SortSelectBtnWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 0 10px;

  background-color: #fff;

  box-shadow: var(--card-box-opacity-1);

  svg {
    color: var(--grey-blue);
  }
`

export const SortSelectDropdownWrapper = styled.ul<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;

  top: 45px;

  width: 100%;

  border-radius: 5px;

  background-color: #fff;

  box-shadow: var(--card-box-opacity-1);

  z-index: 9;
`
