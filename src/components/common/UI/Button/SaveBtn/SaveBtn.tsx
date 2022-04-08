import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SaveBtnWrapper from './SaveBtn.style'
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons'

const SaveBtn: FC = () => {
  return (
    <SaveBtnWrapper type='button'>
      Сохранить
      <FontAwesomeIcon icon={faBoxArchive} />
    </SaveBtnWrapper>
  )
}

export default SaveBtn
