import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons'

import { UserMenuBtnPropTypes } from './UserMenuBtnPropTypes'

import UserMenuBtnWrapper from './UserMenuBtn.style'

const UserMenuBtn: FC<UserMenuBtnPropTypes> = ({ isMenuVisible, onClick }) => {
  return (
    <UserMenuBtnWrapper onClick={onClick}>
      <FontAwesomeIcon icon={isMenuVisible ? faXmark : faUser} />
    </UserMenuBtnWrapper>
  )
}

export default UserMenuBtn
