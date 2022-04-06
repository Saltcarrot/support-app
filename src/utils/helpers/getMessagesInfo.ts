import { Message } from '../types/dialogue'

export const countImages = (messages: Message[]) => {
  let count = 0

  for (let key in messages) {
    if (messages[key].imgs) {
      const len = messages[key].imgs?.length
      if (len !== undefined) {
        count += len
      }
    }
  }

  return count
}
