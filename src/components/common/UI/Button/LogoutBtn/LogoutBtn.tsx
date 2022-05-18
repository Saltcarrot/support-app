import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import { LogoutBtnPropTypes } from './LogoutBtnPropTypes'

import LogoutBtnWrapper from './LogoutBtn.style'

const LogoutBtn: FC<LogoutBtnPropTypes> = ({ onClick }) => {
  return (
    <LogoutBtnWrapper onClick={onClick}>
      Выйти
      <FontAwesomeIcon icon={faArrowRightFromBracket} />
    </LogoutBtnWrapper>
  )
}

export default LogoutBtn
