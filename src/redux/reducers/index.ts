import { combineReducers } from 'redux'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
  user: userReducer,
})

// Для подсказок в компонентах
export type RootState = ReturnType<typeof rootReducer>
