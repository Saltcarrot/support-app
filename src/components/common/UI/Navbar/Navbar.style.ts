import styled from 'styled-components'
import { device } from '../../../../utils/helpers/breakpoints'

export const NavbarContainerWrapper = styled.nav`
  display: flex;
  align-items: center;

  position: relative;

  margin-left: auto;
`

export const NavbarContentWrapper = styled.ul<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  align-items: center;

  @media ${device.tablet} {
    display: flex;
  }
  @media (max-width: 767px) {
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

    position: absolute;

    width: 170px;

    top: 35px;
    right: 0;

    border-radius: 10px;

    background-color: #fff;

    box-shadow: var(--card-box-opacity-1);

    z-index: 2;
  }

  li:not(:last-of-type) {
    margin-right: 10px;

    @media (max-width: 767px) {
      margin-right: 0;
    }
  }
`
