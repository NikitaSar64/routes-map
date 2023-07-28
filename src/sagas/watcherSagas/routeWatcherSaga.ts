import { GET_ROUTE } from '@sagas/actionsSagas/routeSagaActions';
import { fetchRouteWorkerSaga } from '@sagas/workerSagas/routeWorkerSaga';
import { takeEvery } from 'redux-saga/effects';

export function* fetchRouteWatcherSaga() {
	yield takeEvery(GET_ROUTE, fetchRouteWorkerSaga);
}
