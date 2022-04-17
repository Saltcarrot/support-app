import { FC } from 'react'

import { ItemDropdownPropTypes } from './ItemDropdownPropTypes'

import { useOutsideAlerter } from '../../../../../hooks/useOutsideAlerter'
import { useTypedSelector } from '../../../../../hooks/useTypedSelector'

import UI from '../../../UI'

import ItemDropdownWrapper from './ItemDropdown.style'

const ItemDropdown: FC<ItemDropdownPropTypes> = ({
  itemKey,
  status,
  operatorID,
  clientID,
}) => {
  const { user } = useTypedSelector((state) => state.user)
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideAlerter(false)

  const toggleDropdown = () => {
    setIsComponentVisible(!isComponentVisible)
  }

  return (
    <>
      {(user?.user.uid === operatorID ||
        user?.user.uid === clientID ||
        status === 'opened') && (
        <ItemDropdownWrapper ref={ref} isVisible={isComponentVisible}>
          <UI.Button.Ellipsis onClick={toggleDropdown} />
          <div className='dropdown-item'>
            {(user?.user.uid === operatorID ||
              (user?.user.uid === clientID && status !== 'opened')) && (
              <>
                <UI.Link.ToDialogue path={itemKey} />
                <UI.Button.Save onClick={() => {}} />
              </>
            )}
            {status === 'opened' && user?.user.uid !== clientID && (
              <UI.Button.StartDialogue onClick={() => {}} />
            )}
          </div>
        </ItemDropdownWrapper>
      )}
    </>
  )
}

export default ItemDropdown
