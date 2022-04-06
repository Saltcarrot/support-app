import { FC } from 'react'
import { AlertPropTypes } from './AlertPropTypes'

import AlertWrapper from './Alert.style'

const Alert: FC<AlertPropTypes> = ({ type = 'success', message }) => {
  return <AlertWrapper className={type}>{message}</AlertWrapper>
}

export default Alert
