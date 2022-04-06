import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

import EllipsisBtnWrapper from './EllipsisBtn.style'
import { EllipsisBtnPropTypes } from './EllipsisBtnPropTypes'

const EllipsisBtn: FC<EllipsisBtnPropTypes> = ({ onClick }) => {
  return (
    <EllipsisBtnWrapper onClick={onClick}>
      <FontAwesomeIcon icon={faEllipsis} />
    </EllipsisBtnWrapper>
  )
}

export default EllipsisBtn
