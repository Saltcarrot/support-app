import { FC } from 'react'
import { Link } from 'react-router-dom'

import { useOutsideAlerter } from '../../../../hooks/useOutsideAlerter'
import { useActions } from '../../../../hooks/useActions'

import UI from '../index'

import {
  UserMenuContainerWrapper,
  UserMenuContentWrapper,
} from './UserMenu.style'

const UserMenu: FC = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideAlerter(false)

  const {
    user: { signOut },
  } = useActions()

  return (
    <UserMenuContainerWrapper ref={ref}>
      <UI.Button.UserMenu
        isMenuVisible={isComponentVisible}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      />
      <UserMenuContentWrapper isVisible={isComponentVisible}>
        <li>
          <UI.Button.Logout onClick={() => signOut()} />
        </li>
        <li>
          <Link to='/profile'>Профиль</Link>
        </li>
      </UserMenuContentWrapper>
    </UserMenuContainerWrapper>
  )
}

export default UserMenu
