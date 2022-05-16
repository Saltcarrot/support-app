import { useEffect, useState } from 'react'

import { Data, filter, group, PAGE_LIMIT, sort } from '../utils/types/dialogue'

interface DialoguesListArgs {
  dialogues: Data[] | null
  group: group
  filter: filter
  sort: sort
  title: string
  message: string
}

export const useDialoguesList = ({
  dialogues,
  group,
  filter,
  sort,
  title,
  message,
}: DialoguesListArgs) => {
  const [dialoguesList, setDialoguesList] = useState<Data[]>([])
  const [lastValue, setLastValue] = useState<string | number>(0)
  const [hasMore, setHasMore] = useState<boolean>(true)

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
        setLastValue(dialogues[dialogues.length - 1].itemData[`${filter}`])
      }
      if (dialogues.length < PAGE_LIMIT) setHasMore(false)
    }
  }, [dialogues])

  useEffect(() => {
    if (dialoguesList.length !== 0) {
      setDialoguesList([])
    }
  }, [group, filter, sort, title, message])

  return { dialoguesList, lastValue, hasMore }
}
