import styled from 'styled-components'
import { device } from '../../../../../utils/helpers/breakpoints'

const NavbarLinkWrapper = styled.li<{ isActive: boolean }>`
  display: flex;
  align-items: center;

  font-weight: bold;

  border-bottom: 2px solid
    ${({ isActive }) => (isActive ? 'var(--purple)' : 'transparent')};

  color: ${({ isActive }) => (isActive ? 'var(--purple)' : 'inherit')};

  @media (max-width: 767px) {
    border-bottom: none;
  }

  &:hover {
    color: ${({ isActive }) =>
      isActive ? 'var(--purple)' : 'var(--purple-opacity-6)'};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    padding: 10px;

    svg {
      margin-left: 10px;
    }
  }
`

export default NavbarLinkWrapper
