import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

import { SidebarBtnPropTypes } from './SidebarBtnPropTypes'

import SidebarBtnWrapper from './SidebarBtn.style'

const SidebarBtn: FC<SidebarBtnPropTypes> = ({ isDropdownShown, onClick }) => {
  return (
    <SidebarBtnWrapper type='button' onClick={onClick}>
      <FontAwesomeIcon icon={isDropdownShown ? faCaretUp : faCaretDown} />
    </SidebarBtnWrapper>
  )
}

export default SidebarBtn
