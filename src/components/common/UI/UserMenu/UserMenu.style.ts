import styled from 'styled-components'

export const UserMenuContainerWrapper = styled.div`
  position: relative;

  margin-left: 10px;
`

export const UserMenuContentWrapper = styled.ul<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

  position: absolute;

  width: 120px;

  top: 35px;
  right: 0;

  border-radius: 10px;

  background-color: #fff;

  box-shadow: var(--card-box-opacity-1);

  z-index: 2;

  > li {
    a {
      display: block;

      font-family: var(--font-nunito);
      font-weight: bold;
    }
    button,
    a {
      padding: 10px;
    }

    &:hover {
      background-color: var(--light-lavender);
      color: var(--purple-opacity-6);

      &:first-of-type {
        border-radius: 10px 10px 0 0;
      }
      &:last-of-type {
        border-radius: 0 0 10px 10px;
      }
    }
  }
`
