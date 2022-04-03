import { FC } from 'react'

import Div from './Alert.style'

interface IAlertProps {
  type?: string
  message: string
}

const Alert: FC<IAlertProps> = ({ type = 'success', message }) => {
  return <Div className={type}>{message}</Div>
}

export default Alert
