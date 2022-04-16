import firebase from 'firebase/compat/app'
import { Data, group, filter, PAGE_LIMIT, sort } from '../types/dialogue'

const tuple = <T extends group[]>(...args: T) => args

interface SearchDialoguesPropTypes {
  db: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
  group: group
  filter: filter
  sort: sort
  isOperator: boolean
  UID?: string
}

interface SearchNextDialoguesPropTypes extends SearchDialoguesPropTypes {
  lastValue: string | number
}

export const getFirstDialogues = async (args: SearchDialoguesPropTypes) => {
  // Оператор и клиент видят только свои диалоги по умолчанию
  if (args.group === 'all') {
    const snapshot = await args.db
      .where(args.isOperator ? 'operator.id' : 'client.id', '==', args.UID)
      .orderBy(args.filter, args.sort)
      .limit(PAGE_LIMIT)
      .get()

    return snapshot.docs.map((item) => {
      return { itemKey: item.id, itemData: item.data() } as Data
    })
  } else if (args.group !== 'opened') {
    const snapshot = await args.db
      .where(args.isOperator ? 'operator.id' : 'client.id', '==', args.UID)
      .where('status', 'in', tuple(args.group))
      .orderBy(args.filter, args.sort)
      .limit(PAGE_LIMIT)
      .get()

    return snapshot.docs.map((item) => {
      return { itemKey: item.id, itemData: item.data() } as Data
    })
    //  Открытые диалоги видит клиент и все операторы
  } else {
    if (args.isOperator) {
      const snapshot = await args.db
        .where('status', '==', args.group)
        .orderBy(args.filter, args.sort)
        .limit(PAGE_LIMIT)
        .get()

      return snapshot.docs.map((item) => {
        return { itemKey: item.id, itemData: item.data() } as Data
      })
    } else {
      const snapshot = await args.db
        .where('status', '==', args.group)
        .where('client.id', '==', args.UID)
        .orderBy(args.filter, args.sort)
        .limit(PAGE_LIMIT)
        .get()

      return snapshot.docs.map((item) => {
        return { itemKey: item.id, itemData: item.data() } as Data
      })
    }
  }
}

export const getNextDialogues = async (args: SearchNextDialoguesPropTypes) => {
  if (args.group === 'all') {
    const snapshot = await args.db
      .where(args.isOperator ? 'operator.id' : 'client.id', '==', args.UID)
      .orderBy(args.filter, args.sort)
      .startAfter(args.lastValue)
      .limit(PAGE_LIMIT)
      .get()

    return snapshot.docs.map((item) => {
      return { itemKey: item.id, itemData: item.data() } as Data
    })
  } else if (args.group !== 'opened') {
    const snapshot = await args.db
      .where(args.isOperator ? 'operator.id' : 'client.id', '==', args.UID)
      .where('status', 'in', tuple(args.group))
      .orderBy(args.filter, args.sort)
      .startAfter(args.lastValue)
      .limit(PAGE_LIMIT)
      .get()

    return snapshot.docs.map((item) => {
      return { itemKey: item.id, itemData: item.data() } as Data
    })
  } else {
    if (args.isOperator) {
      const snapshot = await args.db
        .where('status', 'in', tuple(args.group))
        .orderBy(args.filter, args.sort)
        .startAfter(args.lastValue)
        .limit(PAGE_LIMIT)
        .get()

      return snapshot.docs.map((item) => {
        return { itemKey: item.id, itemData: item.data() } as Data
      })
    } else {
      const snapshot = await args.db
        .where('status', 'in', tuple(args.group))
        .where('client.id', '==', args.UID)
        .orderBy(args.filter, args.sort)
        .startAfter(args.lastValue)
        .limit(PAGE_LIMIT)
        .get()

      return snapshot.docs.map((item) => {
        return { itemKey: item.id, itemData: item.data() } as Data
      })
    }
  }
}
