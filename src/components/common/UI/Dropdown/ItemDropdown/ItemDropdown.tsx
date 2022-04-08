import { FC } from 'react'
import { ItemDropdownPropTypes } from './ItemDropdownPropTypes'
import { useOutsideAlerter } from '../../../../../hooks/useOutsideAlerter'

import UI from '../../../UI'

import ItemDropdownWrapper from './ItemDropdown.style'

const ItemDropdown: FC<ItemDropdownPropTypes> = ({ id }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideAlerter(false)

  const toggleDropdown = () => {
    setIsComponentVisible(!isComponentVisible)
  }

  return (
    <ItemDropdownWrapper ref={ref} isVisible={isComponentVisible}>
      <UI.Button.Ellipsis onClick={toggleDropdown} />
      <div className='dropdown-item'>
        <UI.Link.ToDialogue path={id} />
        <UI.Button.Save />
      </div>
    </ItemDropdownWrapper>
  )
}

export default ItemDropdown
