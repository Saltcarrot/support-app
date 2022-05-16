import firebase from 'firebase/compat/app'
import {
  Data,
  group,
  filter,
  PAGE_LIMIT,
  sort,
  Dialogue,
} from '../types/dialogue'

interface SearchDialoguesPropTypes {
  db: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
  group: group
  filter: filter
  sort: sort
  isOperator: boolean
  UID?: string
  dTitle: string | null
  dMessage: string | null
}

interface SearchNextDialoguesPropTypes extends SearchDialoguesPropTypes {
  lastValue: string | number
}

const fillData = (
  data: Data[],
  snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>,
  isOperator: boolean,
  dTitle: string | null,
  dMessage: string | null
) => {
  snapshot.docs.forEach((item) => {
    const iBody = item.data() as Dialogue
    if (data.length < PAGE_LIMIT) {
      if (!dTitle && !dMessage) {
        data.push({ itemKey: item.id, itemData: item.data() as Dialogue })
      } else if (
        dTitle &&
        !dMessage &&
        iBody.title.toLowerCase().includes(dTitle)
      ) {
        data.push({ itemKey: item.id, itemData: item.data() as Dialogue })
      } else if (!dTitle && dMessage && iBody.messages) {
        iBody.messages.forEach((m) => {
          if (
            m.content.toLowerCase().includes(dMessage.toLowerCase()) &&
            data.filter((x) => x.itemKey === item.id).length === 0
          ) {
            data.push({ itemKey: item.id, itemData: item.data() as Dialogue })
          }
        })
      } else if (
        dTitle &&
        dMessage &&
        iBody.title.toLowerCase().includes(dTitle) &&
        iBody.messages
      ) {
        iBody.messages.forEach((m) => {
          if (
            m.content.toLowerCase().includes(dMessage.toLowerCase()) &&
            data.filter((x) => x.itemKey === item.id).length === 0
          ) {
            data.push({ itemKey: item.id, itemData: item.data() as Dialogue })
          }
        })
      }
    }
  })
}

export const getFirstDialogues = async (args: SearchDialoguesPropTypes) => {
  let data: Data[] = []

  let lastLoopValue: string | number | null = null
  let prevDataLength: number = 0

  while (data.length < PAGE_LIMIT) {
    if (!lastLoopValue) {
      if (args.group === 'all') {
        const snapshot = await args.db
          .where(args.isOperator ? 'operator.id' : 'client.id', '==', args.UID)
          .orderBy(args.filter, args.sort)
          .limit(PAGE_LIMIT)
          .get()
        fillData(data, snapshot, args.isOperator, args.dTitle, args.dMessage)
      } else if (args.group !== 'opened') {
        const snapshot = await args.db
          .where(args.isOperator ? 'operator.id' : 'client.id', '==', args.UID)
          .where(
            args.group === 'saved'
              ? args.isOperator
                ? 'saved.byOperator'
                : 'saved.byUser'
              : 'status',
            '==',
            args.group === 'saved' ? true : args.group
          )
          .orderBy(args.filter, args.sort)
          .limit(PAGE_LIMIT)
          .get()

        fillData(data, snapshot, args.isOperator, args.dTitle, args.dMessage)
      } else {
        if (args.isOperator) {
          const snapshot = await args.db
            .where('status', '==', args.group)
            .orderBy(args.filter, args.sort)
            .limit(PAGE_LIMIT)
            .get()

          fillData(data, snapshot, args.isOperator, args.dTitle, args.dMessage)
        } else {
          const snapshot = await args.db
            .where('status', '==', args.group)
            .where('client.id', '==', args.UID)
            .orderBy(args.filter, args.sort)
            .limit(PAGE_LIMIT)
            .get()

          fillData(data, snapshot, args.isOperator, args.dTitle, args.dMessage)
        }
      }
    } else {
      if (args.group === 'all') {
        const snapshot = await args.db
          .where(args.isOperator ? 'operator.id' : 'client.id', '==', args.UID)
          .orderBy(args.filter, args.sort)
          .startAfter(lastLoopValue)
          .limit(PAGE_LIMIT)
          .get()

        fillData(data, snapshot, args.isOperator, args.dTitle, args.dMessage)
      } else if (args.group !== 'opened') {
        const snapshot = await args.db
          .where(args.isOperator ? 'operator.id' : 'client.id', '==', args.UID)
          .where(
            args.group === 'saved'
              ? args.isOperator
                ? 'saved.byOperator'
                : 'saved.byUser'
              : 'status',
            '==',
            args.group === 'saved' ? true : args.group
          )
          .orderBy(args.filter, args.sort)
          .startAfter(lastLoopValue)
          .limit(PAGE_LIMIT)
          .get()

        fillData(data, snapshot, args.isOperator, args.dTitle, args.dMessage)
      } else {
        if (args.isOperator) {
          const snapshot = await args.db
            .where('status', '==', args.group)
            .orderBy(args.filter, args.sort)
            .startAfter(lastLoopValue)
            .limit(PAGE_LIMIT)
            .get()

          fillData(data, snapshot, args.isOperator, args.dTitle, args.dMessage)
        } else {
          const snapshot = await args.db
            .where('status', '==', args.group)
            .where('client.id', '==', args.UID)
            .orderBy(args.filter, args.sort)
            .startAfter(lastLoopValue)
            .limit(PAGE_LIMIT)
            .get()

          fillData(data, snapshot, args.isOperator, args.dTitle, args.dMessage)
        }
      }
    }

    if (data.length === 0) break

    lastLoopValue = data[data.length - 1].itemData[args.filter]
    if (prevDataLength !== data.length) prevDataLength = data.length
    else break
  }

  return data
}

export const getNextDialogues = async (args: SearchNextDialoguesPropTypes) => {
  let data: Data[] = []

  let lastLoopValue: string | number | null = null
  let prevDataLength: number = 0

  while (data.length < PAGE_LIMIT) {
    if (args.group === 'all') {
      const snapshot = await args.db
        .where(args.isOperator ? 'operator.id' : 'client.id', '==', args.UID)
        .orderBy(args.filter, args.sort)
        .startAfter(lastLoopValue ? lastLoopValue : args.lastValue)
        .limit(PAGE_LIMIT)
        .get()
      fillData(data, snapshot, args.isOperator, args.dTitle, args.dMessage)
    } else if (args.group !== 'opened') {
      const snapshot = await args.db
        .where(args.isOperator ? 'operator.id' : 'client.id', '==', args.UID)
        .where(
          args.group === 'saved'
            ? args.isOperator
              ? 'saved.byOperator'
              : 'saved.byUser'
            : 'status',
          '==',
          args.group === 'saved' ? true : args.group
        )
        .orderBy(args.filter, args.sort)
        .startAfter(lastLoopValue ? lastLoopValue : args.lastValue)
        .limit(PAGE_LIMIT)
        .get()

      fillData(data, snapshot, args.isOperator, args.dTitle, args.dMessage)
    } else {
      if (args.isOperator) {
        const snapshot = await args.db
          .where('status', '==', args.group)
          .orderBy(args.filter, args.sort)
          .startAfter(lastLoopValue ? lastLoopValue : args.lastValue)
          .limit(PAGE_LIMIT)
          .get()

        fillData(data, snapshot, args.isOperator, args.dTitle, args.dMessage)
      } else {
        const snapshot = await args.db
          .where('status', '==', args.group)
          .where('client.id', '==', args.UID)
          .orderBy(args.filter, args.sort)
          .startAfter(lastLoopValue ? lastLoopValue : args.lastValue)
          .limit(PAGE_LIMIT)
          .get()

        fillData(data, snapshot, args.isOperator, args.dTitle, args.dMessage)
      }
    }

    if (data.length === 0) break

    lastLoopValue = data[data.length - 1].itemData[args.filter]
    if (prevDataLength !== data.length) prevDataLength = data.length
    else break
  }

  return data
}
