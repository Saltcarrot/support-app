import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

import { LinkToDialoguePropTypes } from './LinkToDialoguePropTypes'

import LinkToDialogueWrapper from './LinkToDialogue.style'

const LinkToDialogue: FC<LinkToDialoguePropTypes> = ({ path }) => {
  return (
    <LinkToDialogueWrapper to={`/dialogues/${path}`}>
      Перейти к диалогу
      <FontAwesomeIcon icon={faAnglesRight} />
    </LinkToDialogueWrapper>
  )
}

export default LinkToDialogue
