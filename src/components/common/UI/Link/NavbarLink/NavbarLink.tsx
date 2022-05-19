import { FC } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

import { NavbarLinkPropTypesTypes } from './NavbarLinkPropTypes'

import NavbarLinkWrapper from './NavbarLink.style'

const NavbarLink: FC<NavbarLinkPropTypesTypes> = ({ path, text, isActive }) => {
  return (
    <NavbarLinkWrapper isActive={isActive}>
      <Link to={path}>
        {text}
        {isActive && <FontAwesomeIcon icon={faEnvelopeOpen} />}
      </Link>
    </NavbarLinkWrapper>
  )
}

export default NavbarLink
