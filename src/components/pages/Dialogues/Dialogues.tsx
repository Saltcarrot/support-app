import { FC, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDialoguesList } from '../../../hooks/useDialoguesList'
import { useSearch } from '../../../hooks/useSearch'
import { filter, sort } from '../../../utils/types/dialogue'

import { DialoguesPropTypes } from './DialoguesPropTypes'

import UI from '../../common/UI'
import ListItem from '../../common/Dialogues/ListItem/ListItem'
import Tools from '../../common/Dialogues/Tools/Tools'

const Dialogues: FC<DialoguesPropTypes> = ({ group }) => {
  const { user } = useTypedSelector((state) => state.user)
  const { loading, error, dialogues } = useTypedSelector(
    (state) => state.dialogue
  )

  const [filter, setFilter] = useState<filter>('createdAt')
  const [sort, setSort] = useState<sort>('desc')

  const { dialoguesList, lastValue, hasMore } = useDialoguesList({
    dialogues,
    filter,
    sort,
  })

  const { fetchMoreData } = useSearch({
    group,
    filter,
    sort,
    lastValue,
    isOperator: user?.role === 'operator',
    UID: user?.user.uid,
  })

  return (
    <div>
      <header style={{ height: '60px' }}>header</header>
      <section className='dialogues-box'>
        <Tools
          user={user}
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
        />
        <div className='list'>
          <UI.Container>
            {error && <UI.Alert type='error' message={error} />}
            <InfiniteScroll
              // Обман контейнера, т.к. обрезаются тени карточек
              style={{
                padding: '15px',
                margin: '-15px',
              }}
              dataLength={dialoguesList.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<UI.Loader />}
              endMessage={
                loading ? (
                  <UI.Loader />
                ) : dialoguesList.length !== 0 ? (
                  <UI.EndList />
                ) : (
                  <div style={{ margin: '0 auto' }}>
                    Ой! Кажется, данных нет :с
                  </div>
                )
              }
            >
              {dialoguesList.map((item) => {
                return <ListItem key={item.itemKey} item={item} />
              })}
            </InfiniteScroll>
          </UI.Container>
        </div>
      </section>
    </div>
  )
}

export default Dialogues
