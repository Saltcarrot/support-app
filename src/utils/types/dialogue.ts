export type status = 'active' | 'opened' | 'closed'
export type dataSort = 'createdAt' | 'title'

export const PAGE_LIMIT = 5

export interface SortSettings {
  group: string
  key: dataSort
  value: string | number
}

export interface Chatmate {
  id: string
  name: string
  photoUrl?: string
}

export interface Message {
  author: string
  content: string
  time: number
  imgs?: string[]
}

export interface Dialogue {
  title: string
  subTitle: string
  createdAt: number
  client: Chatmate
  operator?: Chatmate
  messages?: Message[]
  status: status
}

export interface Data {
  itemKey: string
  itemData: Dialogue
}

export interface DialogueState {
  loading: boolean
  error: string | null
  dialogues: Data[] | null
}
