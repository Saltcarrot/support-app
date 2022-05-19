import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

import { CreateDialogueBtnPropTypes } from './CreateDialogueBtnPropTypes'

import CreateDialogueBtnWrapper from './CreateDialogueBtn.style'

const CreateDialogueBtn: FC<CreateDialogueBtnPropTypes> = ({ onClick }) => {
  return (
    <CreateDialogueBtnWrapper type='button' onClick={onClick}>
      <span>
        <FontAwesomeIcon icon={faPencil} />
      </span>
      Обращение
    </CreateDialogueBtnWrapper>
  )
}

export default CreateDialogueBtn
