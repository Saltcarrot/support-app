import { FC, useCallback, useEffect, useState } from 'react'
import { DialoguesPropTypes } from './DialoguesPropTypes'
import { debounce } from 'lodash'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useActions } from '../../../hooks/useActions'
import { Data, dataSort, SortSettings } from '../../../utils/types/dialogue'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

import UI from '../../common/UI'
import List from '../../common/Dialogues/List/List'

const Dialogues: FC<DialoguesPropTypes> = ({ group }) => {
  const { loading, error, dialogues } = useTypedSelector(
    (state) => state.dialogue
  )
  const {
    dialogue: { getDialogues },
  } = useActions()

  const [dialoguesList, setDialoguesList] = useState<Data[]>([])
  const [sortKey, setSortKey] = useState<dataSort>('createdAt')
  const [sortValue, setSortValue] = useState<number | string>(0)
  const [hasMore, setHasMore] = useState<boolean>(true)

  useEffect(() => {
    getDialogues({
      group,
      key: sortKey,
      value: sortValue,
    })
  }, [])

  useEffect(() => {
    if (dialogues) {
      if (dialogues.length !== 0) {
        setHasMore(true)
        if (dialoguesList.length === 0) {
          setDialoguesList(dialogues)
        } else if (
          dialoguesList[dialoguesList.length - 1].itemKey !==
          dialogues[dialogues.length - 1].itemKey
        ) {
          setDialoguesList([...dialoguesList, ...dialogues])
        }
      }
      if (dialogues.length < 5) setHasMore(false)
    }
  }, [dialogues])

  useEffect(() => {
    if (dialoguesList.length !== 0) {
      if (sortKey === 'createdAt') {
        setSortValue(dialoguesList[dialoguesList.length - 1].itemData.createdAt)
      }
      if (sortKey === 'title') {
        setSortValue(dialoguesList[dialoguesList.length - 1].itemData.title)
      }
    }
  }, [dialoguesList])

  const searchData = useCallback(
    debounce(({ group, key, value }: SortSettings) => {
      getDialogues({ group, key, value })
    }, 500),
    []
  )

  const fetchMoreData = () => {
    searchData({
      group,
      key: sortKey,
      value: sortValue,
    })
  }

  return (
    <div>
      <header style={{ height: '60px' }}>header</header>
      <section className='dialogues-box'>
        <div className='tools' style={{ height: '50px' }}>
          tools
        </div>
        <InfiniteScroll
          dataLength={dialoguesList.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<UI.Loader />}
          endMessage={<UI.EndList />}
        >
          <List list={dialoguesList} />
        </InfiniteScroll>
      </section>
    </div>
  )
}

export default Dialogues
