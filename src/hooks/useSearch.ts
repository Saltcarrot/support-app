import { useCallback, useEffect } from 'react'
import { debounce } from 'lodash'

import { useActions } from './useActions'

import { SortSettings } from '../utils/types/dialogue'

export const useSearch = (args: SortSettings) => {
  const {
    dialogue: { getDialogues },
  } = useActions()

  const searchData = useCallback(
    debounce((args: SortSettings) => {
      getDialogues(args)
    }, 500),
    []
  )

  useEffect(() => {
    searchData({ ...args, lastValue: args.filter === 'createdAt' ? 0 : '' })
  }, [args.group, args.filter, args.sort, args.dTitle, args.dMessage])

  const fetchMoreData = () => {
    searchData(args)
  }

  return { searchData, fetchMoreData }
}
