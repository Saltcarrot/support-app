import { FC, useCallback, useEffect, useState } from 'react'
import { DialoguesPropTypes } from './DialoguesPropTypes'
import { useLocation } from 'react-router-dom'
import { debounce } from 'lodash'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useActions } from '../../../hooks/useActions'
import { Data } from '../../../utils/types/dialogue'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

import UI from '../../common/UI'
import List from '../../common/Dialogues/List/List'
import ListItem from '../../common/Dialogues/ListItem/ListItem'

const Dialogues: FC<DialoguesPropTypes> = ({ group }) => {
  const { pathname } = useLocation()
  const { loading, error, dialogues } = useTypedSelector(
    (state) => state.dialogue
  )
  const {
    dialogue: { getDialogues },
  } = useActions()

  const [dialoguesList, setDialoguesList] = useState<Data[]>([])
  const [lastKey, setLastKey] = useState<string>('')
  const [hasMore, setHasMore] = useState<boolean>(true)

  useEffect(() => {
    getDialogues(lastKey)
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
    if (dialoguesList.length !== 0)
      setLastKey(dialoguesList[dialoguesList.length - 1].itemKey)
  }, [dialoguesList])

  const searchData = useCallback(
    debounce((key: string) => {
      getDialogues(key)
    }, 500),
    []
  )

  const fetchMoreData = () => {
    searchData(lastKey)
  }

  return (
    <div>
      <header style={{ height: '60px' }}>header</header>
      <section className='dialogues-box'>
        <div className='tools' style={{ height: '50px' }}>
          tools
        </div>
        {loading && dialoguesList.length === 0 && <UI.Loader />}
        <InfiniteScroll
          dataLength={dialoguesList.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={dialoguesList.length !== 0 && <UI.Loader />}
          endMessage={<UI.EndList />}
        >
          <List list={dialoguesList} />
        </InfiniteScroll>
      </section>
    </div>
  )
}

export default Dialogues
