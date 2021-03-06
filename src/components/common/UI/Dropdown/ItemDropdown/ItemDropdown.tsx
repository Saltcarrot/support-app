import { FC } from 'react'

import { useOutsideAlerter } from '../../../../../hooks/useOutsideAlerter'
import { useTypedSelector } from '../../../../../hooks/useTypedSelector'

import { ItemDropdownPropTypes } from './ItemDropdownPropTypes'

import UI from '../../../UI'

import {
  ItemDropdownContainerWrapper,
  ItemDropDownContent,
} from './ItemDropdown.style'

const ItemDropdown: FC<ItemDropdownPropTypes> = ({
  itemKey,
  status,
  operatorID,
  clientID,
}) => {
  const { user } = useTypedSelector((state) => state.user)
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideAlerter(false)

  return (
    <>
      {(user?.user.uid === operatorID ||
        user?.user.uid === clientID ||
        status === 'opened') && (
        <ItemDropdownContainerWrapper ref={ref}>
          <UI.Button.Ellipsis
            onClick={() => setIsComponentVisible(!isComponentVisible)}
          />
          <ItemDropDownContent isVisible={isComponentVisible}>
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
          </ItemDropDownContent>
        </ItemDropdownContainerWrapper>
      )}
    </>
  )
}

export default ItemDropdown
