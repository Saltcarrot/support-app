import { Dispatch, SetStateAction } from 'react'
import { filter, sort } from '../../../../../utils/types/dialogue'

export interface SortSelectPropTypes {
  text?: string
  filter: filter
  setFilter: Dispatch<SetStateAction<filter>>
  sort: sort
  setSort: Dispatch<SetStateAction<sort>>
}
