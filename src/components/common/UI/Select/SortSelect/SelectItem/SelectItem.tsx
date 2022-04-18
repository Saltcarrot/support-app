import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { SelectItemPropTypes } from './SelectItemPropTypes'

import SelectItemWrapper from './SelectItem.style'

const SelectItem: FC<SelectItemPropTypes> = ({
  filter,
  sort,
  text,
  onClick,
}) => {
  return (
    <SelectItemWrapper value={`${filter} ${sort}`} onClick={onClick}>
      {text}
      <FontAwesomeIcon icon={sort === 'asc' ? faAngleDown : faAngleUp} />
    </SelectItemWrapper>
  )
}

export default SelectItem
