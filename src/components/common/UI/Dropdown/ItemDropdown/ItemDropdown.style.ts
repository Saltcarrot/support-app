import styled from 'styled-components'

export const ItemDropdownContainerWrapper = styled.div`
  position: relative;
`

export const ItemDropDownContent = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;

  width: 200px;

  top: 35px;
  right: 0;

  border-radius: 10px 0 10px 10px;
  background-color: var(--grey-blue);
  color: #fff;
  box-shadow: var(--card-box-opacity-1);

  z-index: 10;
`
