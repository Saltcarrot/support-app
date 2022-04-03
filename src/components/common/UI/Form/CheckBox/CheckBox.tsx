import { FC, MouseEvent } from 'react'
import { FaCheck } from 'react-icons/fa'

import Div from './CheckBox.style'

interface ICheckBoxProps {
  isChecked: boolean
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const CheckBox: FC<ICheckBoxProps> = ({ isChecked, onClick }) => {
  return (
    <Div>
      <button onClick={onClick} type='button'>
        {isChecked && <FaCheck />}
      </button>
      <p>Запомнить меня</p>
    </Div>
  )
}

export default CheckBox
