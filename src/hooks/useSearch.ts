import { useCallback, useEffect } from 'react'
import { debounce } from 'lodash'
import { SortSettings } from '../utils/types/dialogue'
import { useActions } from './useActions'

export const useSearch = (args: SortSettings) => {
  const {
    dialogue: { getDialogues },
  } = useActions()

  useEffect(() => {
    getDialogues(args)
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
