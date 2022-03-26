import { persistStore, persistReducer } from 'redux-persist'
import { rootReducer } from './reducers'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import storage from 'redux-persist/lib/storage'
import rootSaga from './sagas'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
