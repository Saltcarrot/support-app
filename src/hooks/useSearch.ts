import { useCallback, useEffect } from 'react'
import { debounce } from 'lodash'

import { useActions } from './useActions'

import { SortSettings } from '../utils/types/dialogue'

export const useSearch = (args: SortSettings) => {
  const {
    dialogue: { getDialogues },
  } = useActions()

  useEffect(() => {
    getDialogues({ ...args, lastValue: args.filter === 'createdAt' ? 0 : '' })
  }, [args.filter, args.sort])

  const searchData = useCallback(
    debounce((args: SortSettings) => {
      getDialogues(args)
    }, 500),
    []
  )

  const fetchMoreData = () => {
    searchData(args)
  }

  return { searchData, fetchMoreData }
}
