import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'

import { MessagesPropTypes } from './MessagesPropTypes'

import MessagesWrapper from './Messages.style'

const Messages: FC<MessagesPropTypes> = ({ messages }) => {
  return (
    <MessagesWrapper>
      <FontAwesomeIcon icon={faMessage} />
      {Object.keys(messages).length}
    </MessagesWrapper>
  )
}

export default Messages
