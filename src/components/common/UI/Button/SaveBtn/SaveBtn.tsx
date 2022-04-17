import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons'

import { SaveBtnPropTypes } from './SaveBtnPropTypes'

import SaveBtnWrapper from './SaveBtn.style'

const SaveBtn: FC<SaveBtnPropTypes> = ({ onClick }) => {
  return (
    <SaveBtnWrapper type='button' onClick={onClick}>
      Сохранить
      <FontAwesomeIcon icon={faBoxArchive} />
    </SaveBtnWrapper>
  )
}

export default SaveBtn
