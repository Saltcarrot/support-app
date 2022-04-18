import { MouseEvent } from 'react'
import { filter, sort } from '../../../../../../utils/types/dialogue'

export interface SelectItem {
  text: string
  filter: filter
  sort: sort
}

export interface SelectItemPropTypes {
  text: string
  filter: filter
  sort: sort
  onClick: (event: MouseEvent<HTMLLIElement>) => void
}
