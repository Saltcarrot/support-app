import firebase from 'firebase/compat/app'
import { Data, group, filter, PAGE_LIMIT, sort } from '../types/dialogue'

const tuple = <T extends group[]>(...args: T) => args

interface SearchDialoguesPropTypes {
  db: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
  group: group
  filter: filter
  sort: sort
  operatorID?: string
}

interface SearchNextDialoguesPropTypes extends SearchDialoguesPropTypes {
  lastValue: string | number
}

export const getFirstDialogues = async ({
  db,
  group,
  filter,
  sort,
}: SearchDialoguesPropTypes) => {
  if (group === 'all') {
    const snapshot = await db.orderBy(filter, sort).limit(PAGE_LIMIT).get()

    return snapshot.docs.map((item) => {
      return { itemKey: item.id, itemData: item.data() } as Data
    })
  } else {
    const snapshot = await db
      .where('status', 'in', tuple(group))
      .orderBy(filter, sort)
      .limit(PAGE_LIMIT)
      .get()

    return snapshot.docs.map((item) => {
      return { itemKey: item.id, itemData: item.data() } as Data
    })
  }
}

export const getNextDialogues = async ({
  db,
  group,
  filter,
  sort,
  lastValue,
}: SearchNextDialoguesPropTypes) => {
  if (group === 'all') {
    const snapshot = await db
      .orderBy(filter, sort)
      .startAfter(lastValue)
      .limit(PAGE_LIMIT)
      .get()

    return snapshot.docs.map((item) => {
      return { itemKey: item.id, itemData: item.data() } as Data
    })
  } else {
    const snapshot = await db
      .where('status', 'in', tuple(group))
      .orderBy(filter, sort)
      .startAfter(lastValue)
      .limit(PAGE_LIMIT)
      .get()

    return snapshot.docs.map((item) => {
      return { itemKey: item.id, itemData: item.data() } as Data
    })
  }
}
