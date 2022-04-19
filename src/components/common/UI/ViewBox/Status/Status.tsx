import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLockOpen,
  faLock,
  faNoteSticky,
} from '@fortawesome/free-solid-svg-icons'

import { StatusPropTypes } from './StatusPropTypes'

import StatusWrapper from './Status.style'

const Status: FC<StatusPropTypes> = ({ status }) => {
  return (
    <StatusWrapper className={status}>
      {status === 'opened' ? (
        <FontAwesomeIcon icon={faLockOpen} />
      ) : status === 'active' ? (
        <FontAwesomeIcon icon={faNoteSticky} />
      ) : (
        status === 'closed' && <FontAwesomeIcon icon={faLock} />
      )}
    </StatusWrapper>
  )
}

export default Status
