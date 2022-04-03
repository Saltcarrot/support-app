type status = 'active' | 'opened' | 'closed'

export interface Message {
  author: string
  content: string
  time: number
  imgs?: string[]
}

export interface Dialogue {
  title: string
  createdAt: number
  client: {
    id: string
    name: string
  }
  operator?: {
    id: string
    name: string
  }
  messages?: Message[]
  status: status
}

export interface Data {
  key: string | null
  data: Dialogue
}

export interface DialogueState {
  loading: boolean
  error: string | null
  dialogues: Data[] | null
}
