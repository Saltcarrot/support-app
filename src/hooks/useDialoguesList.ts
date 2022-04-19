import { useEffect, useState } from 'react'

import { Data, filter, PAGE_LIMIT, sort } from '../utils/types/dialogue'

interface DialoguesListArgs {
  dialogues: Data[] | null
  filter: filter
  sort: sort
}

export const useDialoguesList = ({
  dialogues,
  filter,
  sort,
}: DialoguesListArgs) => {
  const [dialoguesList, setDialoguesList] = useState<Data[]>([])
  const [lastValue, setLastValue] = useState<string | number>(0)
  const [hasMore, setHasMore] = useState<boolean>(true)

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

  useEffect(() => {
    if (dialoguesList.length !== 0) {
      setDialoguesList([])
    }
  }, [filter, sort])

  return { dialoguesList, lastValue, hasMore }
}
