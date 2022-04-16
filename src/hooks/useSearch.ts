import { useCallback, useEffect } from 'react'
import { debounce } from 'lodash'
import { SortSettings } from '../utils/types/dialogue'
import { useActions } from './useActions'

export const useSearch = ({ group, filter, sort, lastValue }: SortSettings) => {
  const {
    dialogue: { getDialogues },
  } = useActions()

  useEffect(() => {
    getDialogues({
      group,
      filter,
      sort,
      lastValue,
    })
  }, [])

  const searchData = useCallback(
    debounce(({ group, filter, sort, lastValue }: SortSettings) => {
      getDialogues({ group, filter, sort, lastValue })
    }, 500),
    []
  )

  const fetchMoreData = () => {
    searchData({
      group,
      filter,
      sort,
      lastValue,
    })
  }

  return { fetchMoreData }
}
