import { Dispatch, FC, SetStateAction } from 'react'
import { CustomForm as Form } from '../../index'

import Div from './CheckBoxAndLink.style'

interface CheckBoxAndLinkPropTypes {
  isRemember: boolean
  setIsRemember: Dispatch<SetStateAction<boolean>>
}

const CheckBoxAndLink: FC<CheckBoxAndLinkPropTypes> = ({
  isRemember,
  setIsRemember,
}: CheckBoxAndLinkPropTypes) => {
  return (
    <Div>
      <Form.CheckBox
        isChecked={isRemember}
        onClick={() => setIsRemember(!isRemember)}
      />
      <Form.Link.ForgotPassword />
    </Div>
  )
}

export default CheckBoxAndLink
