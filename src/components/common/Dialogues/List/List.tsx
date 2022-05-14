import { FC } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import ListWrapper from './List.style'
import UI from '../../UI'
import ListItem from '../ListItem/ListItem'
import Alert from '../../UI/Alert/Alert'

import { ListPropTypes } from './ListPropTypes'

const List: FC<ListPropTypes> = ({
  list,
  hasMore,
  loading,
  error,
  fetchMoreData,
}) => {
  return (
    <ListWrapper>
      <UI.Container flow='column'>
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
