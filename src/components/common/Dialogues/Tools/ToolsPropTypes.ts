import { User } from '../../../../utils/types/user'
import { filter, sort } from '../../../../utils/types/dialogue'
import { Dispatch, SetStateAction } from 'react'

export interface ToolsPropTypes {
  user: User | null
  filter: filter
  setFilter: Dispatch<SetStateAction<filter>>
  sort: sort
  setSort: Dispatch<SetStateAction<sort>>
}
