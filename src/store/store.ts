import { configureStore } from '@reduxjs/toolkit';
import routeSaga from '@sagas/index';
import createSagaMiddleware from 'redux-saga';

import { routeSlice } from './route/routeSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	devTools: true,
	reducer: {
		route: routeSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(routeSaga);

export type RootState = ReturnType<typeof store.getState>;
