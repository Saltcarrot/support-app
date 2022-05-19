import { FC, useState } from 'react'

import { useOutsideAlerter } from '../../../../../hooks/useOutsideAlerter'
import { filter, sort } from '../../../../../utils/types/dialogue'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { SortSelectPropTypes } from './SortSelectPropTypes'
import { SelectItem } from './SelectItem/SelectItemPropTypes'

import {
  SortSelectContainerWrapper,
  SortSelectBtnWrapper,
  SortSelectDropdownWrapper,
} from './SortSelect.style'

import UI from '../../index'

const SortSelect: FC<SortSelectPropTypes> = ({
  text = '9-0',
  ...rest
}: SortSelectPropTypes) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideAlerter(false)

  const [btnText, setBtnText] = useState<string>(text)

  const toggleDropdown = () => {
    setIsComponentVisible(!isComponentVisible)
  }

  const onSelectItemClickHandler = (
    text: string,
    filter: filter,
    sort: sort
  ) => {
    rest.setFilter(filter)
    rest.setSort(sort)
    setBtnText(text)
    setIsComponentVisible(false)
  }

  const items: SelectItem[] = [
    { filter: 'title', sort: 'asc', text: 'А-Я' },
    { filter: 'title', sort: 'desc', text: 'Я-А' },
    { filter: 'createdAt', sort: 'asc', text: '0-9' },
    { filter: 'createdAt', sort: 'desc', text: '9-0' },
  ]

  return (
    <SortSelectContainerWrapper ref={ref}>
      <SortSelectBtnWrapper type='button' onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faFilter} />
        {btnText}
        <FontAwesomeIcon icon={faAngleDown} />
      </SortSelectBtnWrapper>
      <SortSelectDropdownWrapper isVisible={isComponentVisible}>
        {items.map((item) => {
          return (
            <UI.Select.Item
              key={`${item.filter} ${item.sort}`}
              filter={item.filter}
              sort={item.sort}
              text={item.text}
              onClick={() =>
                onSelectItemClickHandler(item.text, item.filter, item.sort)
              }
            />
          )
        })}
      </SortSelectDropdownWrapper>
    </SortSelectContainerWrapper>
  )
}

export default SortSelect
