import { FC } from 'react'
import { EllipsisBtnPropTypes } from './EllipsisBtnPropTypes'
import { useOutsideAlerter } from '../../../../../hooks/useOutsideAlerter'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

import {
  EllipsisBtnWrapper,
  EllipsisDropDownWrapper,
  DropdownWrapper,
} from './EllipsisBtn.style'

const EllipsisBtn: FC<EllipsisBtnPropTypes> = ({ id }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideAlerter(false)
  const click = () => {
    setIsComponentVisible(!isComponentVisible)
  }

  return (
    <DropdownWrapper>
      <EllipsisBtnWrapper onClick={click} ref={ref}>
        <FontAwesomeIcon icon={faEllipsis} />
      </EllipsisBtnWrapper>
      <EllipsisDropDownWrapper id={id} isVisible={isComponentVisible}>
        <Link to={`/dialogues/${id}`}>Перейти к диалогу</Link>
      </EllipsisDropDownWrapper>
    </DropdownWrapper>
  )
}

export default EllipsisBtn
