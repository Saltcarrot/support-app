import { FC, useState } from 'react'
import { DialoguesPropTypes } from './DialoguesPropTypes'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useSearch } from '../../../hooks/useSearch'
import InfiniteScroll from 'react-infinite-scroll-component'
import { filter, sort } from '../../../utils/types/dialogue'

import UI from '../../common/UI'
import Container from '../../common/Container/Container'
import ListItem from '../../common/Dialogues/ListItem/ListItem'
import { useDialoguesList } from '../../../hooks/useDialoguesList'

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
        <div className='tools'>
          <Container flow='row'>
            {user?.role === 'user' && (
              <UI.Button.CreateDialogue onClick={() => {}} />
            )}
            <UI.Select.Sort
              filter={filter}
              setFilter={setFilter}
              sort={sort}
              setSort={setSort}
            />
          </Container>
        </div>
        {error && <UI.Alert type='error' message={error} />}
        <InfiniteScroll
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
              <Container>
                <div style={{ margin: '0 auto' }}>
                  Ой! Кажется, данных нет :с
                </div>
              </Container>
            )
          }
        >
          <Container>
            {dialoguesList.map((item) => {
              return <ListItem key={item.itemKey} item={item} />
            })}
          </Container>
        </InfiniteScroll>
      </section>
    </div>
  )
}

export default Dialogues
