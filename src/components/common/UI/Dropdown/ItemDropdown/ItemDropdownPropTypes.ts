import { status } from '../../../../../utils/types/dialogue'

export interface ItemDropdownPropTypes {
  itemKey: string
  status: status
  operatorID?: string
  clientID: string
}
