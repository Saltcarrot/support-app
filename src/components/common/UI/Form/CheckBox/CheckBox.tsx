import { FC } from 'react'
import { CheckBoxPropTypes } from './CheckBoxPropTypes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import CheckBoxWrapper from './CheckBox.style'

const CheckBox: FC<CheckBoxPropTypes> = ({ isChecked, onClick }) => {
  return (
    <CheckBoxWrapper>
      <button onClick={onClick} type='button'>
        {isChecked && <FontAwesomeIcon icon={faCheck} />}
      </button>
      <p>Запомнить меня</p>
    </CheckBoxWrapper>
  )
}

export default CheckBox
