import { FC } from 'react'
import { Chatmate } from '../../../../../../utils/types/dialogue'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import OperatorWrapper from './Operator.style'

const Operator: FC<Omit<Chatmate, 'id'>> = ({ name, photoUrl }) => {
  return (
    <OperatorWrapper>
      {!photoUrl && (
        <>
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
          {name}
        </>
      )}
    </OperatorWrapper>
  )
}

export default Operator
