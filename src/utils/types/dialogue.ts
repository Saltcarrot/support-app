type status = 'active' | 'opened' | 'closed'

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
  createdAt: number
  client: Chatmate
  operator?: Chatmate
  messages?: Message[]
  status: status
}

export interface Data {
  key: string
  data: Dialogue
}

export interface DialogueState {
  loading: boolean
  error: string | null
  dialogues: Data[] | null
}
