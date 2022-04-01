import Form from './Form'
import FormHeader from './FormHeader/FormHeader'
import FormGroup from './FormGroup/FormGroup'
import Label from './Label/Label'
import Input from './Input/Input'
import AuthLink from './Link/AuthLink/AuthLink'
import ForgotPassLink from './Link/ForgotPassLink/ForgotPassLink'
import CheckBox from './CheckBox/CheckBox'
import GoogleAuth from './Button/GoogleAuth/GoogleAuth'
import SubmitBtn from './Button/SubmitBtn/SubmitBtn'

export const CustomForm = {
  Container: Form,
  Header: FormHeader,
  Group: FormGroup,
  Label,
  Input,
  Link: {
    Redirect: AuthLink,
    ForgotPassword: ForgotPassLink,
  },
  CheckBox,
  Button: {
    Google: GoogleAuth,
    Submit: SubmitBtn,
  },
}
