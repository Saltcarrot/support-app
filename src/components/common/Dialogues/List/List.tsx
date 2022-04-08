import { FC } from 'react'
import { ListPropTypes } from './ListPropTypes'

import ListItem from '../ListItem/ListItem'

const List: FC<ListPropTypes> = ({ list }) => {
  return (
    <div>
      {list.map((item) => {
        return <ListItem key={item.itemKey} item={item} />
      })}
    </div>
  )
}

export default List
