import { FC } from 'react'
import { ListPropTypes } from './ListPropTypes'

import ListItem from '../ListItem/ListItem'

import ListWrapper from './List.style'

const List: FC<ListPropTypes> = ({ list }) => {
  return (
    <ListWrapper>
      {list.map((item) => {
        return <ListItem key={item.itemKey} item={item} />
      })}
    </ListWrapper>
  )
}

export default List
