export type status = 'active' | 'opened' | 'closed'
export type group = status | 'all' | 'saved'
export type filter = 'createdAt' | 'title'
export type sort = 'asc' | 'desc'
export type rate = 1 | 2 | 3 | 4 | 5

export const PAGE_LIMIT = 5

export interface SortSettings {
  group: group
  filter: filter
  sort: sort
  lastValue: string | number
  isOperator: boolean
  UID?: string
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
  rate?: rate
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
