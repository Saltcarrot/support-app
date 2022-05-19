import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { group } from '../../../utils/types/dialogue'

import UI from '../UI'

const Header: FC = () => {
  const { pathname } = useLocation()

  return (
    <header>
      <UI.Container flow='row'>
        <UI.Navbar
          path={pathname.split('/')[pathname.split('/').length - 1] as group}
        />
        <UI.UserMenu />
      </UI.Container>
    </header>
  )
}

export default Header
