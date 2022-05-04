import { FC } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import UI from '../../UI'
import ListItem from '../ListItem/ListItem'

import { ListPropTypes } from './ListPropTypes'

import ListWrapper from './List.style'
import Alert from '../../UI/Alert/Alert'

const List: FC<ListPropTypes> = ({
  list,
  hasMore,
  loading,
  error,
  fetchMoreData,
}) => {
  return (
    <ListWrapper>
      <UI.Container>
        {error && <UI.Alert type='error' message={error} />}
        <InfiniteScroll
          dataLength={list.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<UI.Loader />}
          endMessage={
            loading ? (
              <UI.Loader />
            ) : list.length !== 0 ? (
              <UI.EndList />
            ) : (
              <Alert type='error' message='Ой! Кажется, данных нет :с' />
            )
          }
        >
          {list.map((item) => {
            return <ListItem key={item.itemKey} item={item} />
          })}
        </InfiniteScroll>
      </UI.Container>
    </ListWrapper>
  )
}

export default List
