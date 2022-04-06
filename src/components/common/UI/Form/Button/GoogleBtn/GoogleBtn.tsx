import { FC } from 'react'
import { GoogleBtnPropTypes } from './GoogleBtnPropTypes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

import GoogleBtnWrapper from './GoogleBtn.style'

const GoogleBtn: FC<GoogleBtnPropTypes> = ({ onClick }) => {
  return (
    <GoogleBtnWrapper type='button' onClick={onClick}>
      Войти через <FontAwesomeIcon icon={faGoogle} />
    </GoogleBtnWrapper>
  )
}

export default GoogleBtn
