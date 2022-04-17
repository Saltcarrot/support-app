import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'

import { StartDialogueBtnPropTypes } from './StartDialogueBtnPropTypes'

import StartDialogueBtnWrapper from './StartDialogueBtn.style'

const StartDialogueBtn: FC<StartDialogueBtnPropTypes> = ({ onClick }) => {
  return (
    <StartDialogueBtnWrapper type='button'>
      Начать диалог
      <FontAwesomeIcon icon={faBoxOpen} />
    </StartDialogueBtnWrapper>
  )
}

export default StartDialogueBtn
