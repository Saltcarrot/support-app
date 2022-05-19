import styled from 'styled-components'
import { device } from '../../../../../utils/helpers/breakpoints'

const NavbarBtnWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 30px;
  width: 30px;

  font-size: 20px;

  @media ${device.tablet} {
    display: none;
  }
`

export default NavbarBtnWrapper
