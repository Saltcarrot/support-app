import firebase from 'firebase/compat/app'
import { Data, dataSort, PAGE_LIMIT } from '../types/dialogue'

export const searchData = async (
  ref: firebase.database.Reference,
  group: string,
  orderKey: dataSort,
  orderValue: string | number
) => {
  let data: Data[] = []

  await ref
    .orderByChild(orderKey)
    .startAfter(orderValue)
    .limitToFirst(PAGE_LIMIT)
    .once('value', (sn) => {
      if (sn.exists()) {
        sn.forEach((child) => {
          data.push({
            itemKey: child.key ? child.key : data.length.toString(),
            itemData: child.val(),
          })
        })
      }
    })
  return data
}
