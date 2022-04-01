import { FC, MouseEvent } from 'react'

import { FaGoogle } from 'react-icons/fa'

import styles from './GoogleAuth.module.sass'

interface IGoogleAuthProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const GoogleAuth: FC<IGoogleAuthProps> = ({ onClick }: IGoogleAuthProps) => {
  return (
    <button className={styles.google} type='button' onClick={onClick}>
      Авторизоваться через <FaGoogle />
    </button>
  )
}

export default GoogleAuth
