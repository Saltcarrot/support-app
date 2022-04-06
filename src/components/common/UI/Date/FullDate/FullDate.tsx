import { FC } from 'react'
import Moment from 'react-moment'
import 'moment/locale/ru'
import { FullDatePropTypes } from './FullDatePropTypes'

const FullDate: FC<FullDatePropTypes> = ({ time }) => {
  return (
    <Moment locale='ru' format='llll' unix>
      {time}
    </Moment>
  )
}

export default FullDate
