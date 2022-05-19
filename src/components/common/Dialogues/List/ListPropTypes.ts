import { Data } from '../../../../utils/types/dialogue'

export interface ListPropTypes {
  list: Data[]
  hasMore: boolean
  loading: boolean
  error: string | null
  fetchMoreData: () => void
}
