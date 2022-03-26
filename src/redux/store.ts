import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from './reducers'
import rootSaga from './sagas'

const persistConfig = {
  key: 'root',
  storage,
}

// Связка локального хранилища и корневого редюсера
const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

// Создание стора
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
