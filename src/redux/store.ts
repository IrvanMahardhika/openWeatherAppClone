import createSagaMiddleware from 'redux-saga';
import {configureStore, EnhancedStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import reducers from './reducers/index';
import sagas from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers(reducers);

export const store: EnhancedStore = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(sagas);
