import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { group } from '../../../utils/types/dialogue'

import UI from '../UI'

import HeaderWrapper from './Header.style'

const Header: FC = () => {
  const { pathname } = useLocation()

  return (
    <HeaderWrapper>
      <UI.Container flow='row'>
        <UI.Navbar
          path={pathname.split('/')[pathname.split('/').length - 1] as group}
        />
      </UI.Container>
    </HeaderWrapper>
  )
}

export default Header
