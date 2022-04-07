import styled from 'styled-components'

export const DropdownWrapper = styled.div`
  position: relative;
  /* width: 200px; */
`

export const EllipsisBtnWrapper = styled.button`
  height: 40px;
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 10px;
`

export const EllipsisDropDownWrapper = styled.div<{
  isVisible: boolean
}>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;

  width: 200px;

  top: 40px;
  right: 0;

  padding: 10px;

  /* border: 1px solid var(); */
  border-radius: 10px;
  background-color: var(--purple);

  z-index: 10;

  a {
    display: block;
  }
`
