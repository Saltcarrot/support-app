import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

import { EllipsisBtnPropTypes } from './EllipsisBtnPropTypes'

import EllipsisBtnWrapper from './EllipsisBtn.style'

const EllipsisBtn: FC<EllipsisBtnPropTypes> = ({ onClick }) => {
  return (
    <EllipsisBtnWrapper type='button' onClick={onClick}>
      <FontAwesomeIcon icon={faEllipsis} />
    </EllipsisBtnWrapper>
  )
}

export default EllipsisBtn
