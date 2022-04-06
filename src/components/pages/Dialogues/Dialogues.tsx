import { FC, useEffect, useState } from 'react'
import { DialoguesPropTypes } from './DialoguesPropTypes'
import { useLocation } from 'react-router-dom'
import { useActions } from '../../../hooks/useActions'
import { Data } from '../../../utils/types/dialogue'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

import List from '../../common/Dialogues/List/List'

const Dialogues: FC<DialoguesPropTypes> = ({ group }) => {
  const { pathname } = useLocation()
  const { loading, error, dialogues } = useTypedSelector(
    (state) => state.dialogue
  )
  const {
    dialogue: { getDialogues },
  } = useActions()
  const [dialoguesList, setDialoguesList] = useState<Data[]>([])
  // console.log(pathname.includes(group))

  useEffect(() => {
    getDialogues()
  }, [])

  useEffect(() => {
    if (dialogues) {
      if (dialoguesList.length === 0) {
        setDialoguesList(dialogues)
      }
    }
  }, [dialogues])

  return (
    <div>
      <section
        className='dialogues-box'
        style={{ width: '100%', padding: '20px' }}
      >
        <div className='tools'>tools</div>
        <div className='list'>
          <List list={dialoguesList} />
        </div>
      </section>
    </div>
  )
}

export default Dialogues
