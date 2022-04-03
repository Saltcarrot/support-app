import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { dialogueReducer } from './dialogueReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  dialogue: dialogueReducer,
})

// Для подсказок в компонентах
export type RootState = ReturnType<typeof rootReducer>
