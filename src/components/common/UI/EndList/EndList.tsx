import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons'

import EndListWrapper from './EndList.style'

const EndList: FC = () => {
  return (
    <EndListWrapper>
      Конец списка
      <FontAwesomeIcon icon={faFlagCheckered} />
    </EndListWrapper>
  )
}

export default EndList
