import { FC } from 'react'
import { ListPropTypes } from './ListPropTypes'

import ListItem from '../ListItem/ListItem'

const List: FC<ListPropTypes> = ({ list }) => {
  return (
    <div>
      {list.map((item) => {
        return (
          <ListItem
            key={item.itemKey}
            itemKey={item.itemKey}
            itemData={item.itemData}
          />
        )
      })}
    </div>
  )
}

export default List
