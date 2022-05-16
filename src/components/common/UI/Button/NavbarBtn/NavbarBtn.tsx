import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import { NavbarBtnPropTypes } from './NavbarBtnPropTypes'

import NavbarBtnWrapper from './NavbarBtn.style'

const NavbarBtn: FC<NavbarBtnPropTypes> = ({ isNavbarVisible, onClick }) => {
  return (
    <NavbarBtnWrapper type='button' onClick={onClick}>
      <FontAwesomeIcon icon={isNavbarVisible ? faXmark : faBars} />
    </NavbarBtnWrapper>
  )
}

export default NavbarBtn
