import firebase from 'firebase/compat/app'
import { Data } from '../types/dialogue'

export const searchData = async (ref: firebase.database.Reference) => {
  let data: Data[] = []
  await ref
    // .orderByKey()
    // .startAfter(key)
    .once('value', (sn) => {
      if (sn.exists()) {
        sn.forEach((child) => {
          if (data.length !== 5) {
            data.push({
              key: child.key ? child.key : data.length.toString(),
              data: child.val(),
            })
          }
        })
      }
    })

  return data
}
