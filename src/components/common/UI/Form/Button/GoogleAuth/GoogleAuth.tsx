import { FC, MouseEvent } from 'react'

import { FaGoogle } from 'react-icons/fa'

import Button from './GoogleAuth.style'

interface IGoogleAuthProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const GoogleAuth: FC<IGoogleAuthProps> = ({ onClick }) => {
  return (
    <Button type='button' onClick={onClick}>
      Войти через <FaGoogle />
    </Button>
  )
}

export default GoogleAuth
