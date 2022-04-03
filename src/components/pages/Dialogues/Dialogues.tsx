import { FC, useEffect } from 'react'
import { DialoguesPropTypes } from './DialoguesPropTypes'
import { useLocation } from 'react-router-dom'
import { useActions } from '../../../hooks/useActions'

const Dialogues: FC<DialoguesPropTypes> = ({ group }) => {
  const { pathname } = useLocation()
  const {
    dialogue: { getDialogues },
  } = useActions()
  // console.log(pathname.includes(group))

  useEffect(() => {
    getDialogues()
  }, [])

  return <div>{group}</div>
}

export default Dialogues
