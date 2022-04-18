import { FC, useEffect, useState } from 'react'
import { DialoguesPropTypes } from './DialoguesPropTypes'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useSearch } from '../../../hooks/useSearch'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Data, filter, PAGE_LIMIT, sort } from '../../../utils/types/dialogue'

import UI from '../../common/UI'
import Container from '../../common/Container/Container'
import ListItem from '../../common/Dialogues/ListItem/ListItem'

const Dialogues: FC<DialoguesPropTypes> = ({ group }) => {
  const { user } = useTypedSelector((state) => state.user)
  const { loading, error, dialogues } = useTypedSelector(
    (state) => state.dialogue
  )

  const [dialoguesList, setDialoguesList] = useState<Data[]>([])
  const [filter, setFilter] = useState<filter>('createdAt')
  const [sort, setSort] = useState<sort>('desc')
  const [lastValue, setLastValue] = useState<string | number>(0)
  const [hasMore, setHasMore] = useState<boolean>(true)

  const { fetchMoreData } = useSearch({
    group,
    filter,
    sort,
    lastValue,
    isOperator: user?.role === 'operator',
    UID: user?.user.uid,
  })

  // Продумать изменение последнего значения
  useEffect(() => {
    if (dialoguesList.length !== 0) {
      setLastValue(filter === 'createdAt' ? 0 : '')
      setDialoguesList([])
    }
  }, [filter, sort])

  useEffect(() => {
    if (dialogues) {
      if (dialogues.length !== 0) {
        // setHasMore(true)
        if (dialoguesList.length === 0) {
          setDialoguesList(dialogues)
        } else if (
          dialoguesList[dialoguesList.length - 1].itemKey !==
          dialogues[dialogues.length - 1].itemKey
        ) {
          setDialoguesList([...dialoguesList, ...dialogues])
        }
        setLastValue(dialogues[dialogues.length - 1].itemData[`${filter}`])
      }
      if (dialogues.length < PAGE_LIMIT) setHasMore(false)
    }
  }, [dialogues])

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
