import { fetchRouteWatcherSaga } from '@sagas/watcherSagas/routeWatcherSaga';

export default function* routeSaga() {
	yield fetchRouteWatcherSaga();
}
