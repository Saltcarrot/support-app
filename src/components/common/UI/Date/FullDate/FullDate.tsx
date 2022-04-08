import { FC } from 'react'
import Moment from 'react-moment'
import 'moment/locale/ru'
import { FullDatePropTypes } from './FullDatePropTypes'

import FullDateWrapper from './FullDate.style'

const FullDate: FC<FullDatePropTypes> = ({ time }) => {
  return (
    <FullDateWrapper>
      <Moment locale='ru' format='llll' unix>
        {time}
      </Moment>
    </FullDateWrapper>
  )
}

export default FullDate
