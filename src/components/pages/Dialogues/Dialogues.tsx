import { FC, useState } from 'react'

import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDialoguesList } from '../../../hooks/useDialoguesList'
import { useSearch } from '../../../hooks/useSearch'
import { filter, sort } from '../../../utils/types/dialogue'

import { DialoguesPropTypes } from './DialoguesPropTypes'

import Tools from '../../common/Dialogues/Tools/Tools'
import List from '../../common/Dialogues/List/List'

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
    <>
      <header style={{ height: '60px' }}>header</header>
      <section className='dialogues-box'>
        <Tools
          user={user}
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
        />
        <List
          list={dialoguesList}
          hasMore={hasMore}
          loading={loading}
          error={error}
          fetchMoreData={fetchMoreData}
        />
      </section>
    </>
  )
}

export default Dialogues
