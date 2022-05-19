import { FC } from 'react'

import CustomForm from '../../index'

import { CheckBoxAndLinkPropTypes } from './CheckBoxAndLinkPropTypes'

import CheckBoxAndLinkWrapper from './CheckBoxAndLink.style'

const CheckBoxAndLink: FC<CheckBoxAndLinkPropTypes> = ({
  isRemember,
  setIsRemember,
}) => {
  return (
    <CheckBoxAndLinkWrapper>
      <CustomForm.CheckBox
        isChecked={isRemember}
        onClick={() => setIsRemember(!isRemember)}
      />
      <CustomForm.Link.ForgotPassword />
    </CheckBoxAndLinkWrapper>
  )
}

export default CheckBoxAndLink
