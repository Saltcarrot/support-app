import { FC } from 'react'

import { useOutsideAlerter } from '../../../../hooks/useOutsideAlerter'

import UI from '../index'

import { NavbarPropTypes } from './NavbarPropTypes'

import { NavbarContainerWrapper, NavbarContentWrapper } from './Navbar.style'

const Navbar: FC<NavbarPropTypes> = ({ path }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideAlerter(false)

  return (
    <NavbarContainerWrapper ref={ref}>
      <UI.Button.Navbar
        isNavbarVisible={isComponentVisible}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      />
      <NavbarContentWrapper isVisible={isComponentVisible}>
        <UI.Link.Navbar
          path='/dialogues/all'
          text='Все обращения'
          isActive={path === 'all'}
        />
        <UI.Link.Navbar
          path='/dialogues/opened'
          text='Открытые'
          isActive={path === 'opened'}
        />
        <UI.Link.Navbar
          path='/dialogues/active'
          text='Активные'
          isActive={path === 'active'}
        />
        <UI.Link.Navbar
          path='/dialogues/closed'
          text='Закрытые'
          isActive={path === 'closed'}
        />
        <UI.Link.Navbar
          path='/dialogues/saved'
          text='Сохраненные'
          isActive={path === 'saved'}
        />
      </NavbarContentWrapper>
    </NavbarContainerWrapper>
  )
}

export default Navbar
