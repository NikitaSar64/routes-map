import { IApiResponse, IRouteSagaAction } from '@interfaces/interfaces';
import { isAxiosError } from 'axios';
import { call, put } from 'redux-saga/effects';

import { getRouteApi } from '@services/getRouteApi';

import {
	getRouteError,
	getRouteLoading,
	getRouteSuccess,
} from '@store/route/routeSlice';

export function* fetchRouteWorkerSaga(action: IRouteSagaAction): any {
	const { payload: coordinate } = action;
	yield put(getRouteLoading({ result: 'loading' }));
	try {
		const data: IApiResponse = yield call(getRouteApi, coordinate);
		const coordinates = data.routes[0].geometry.coordinates;
		const waypoints = data.waypoints.map((waypoint) => waypoint.location);

		yield put(
			getRouteSuccess({
				coordinates,
				waypoints,
				status: { result: 'success' },
			})
		);
	} catch (error) {
		if (isAxiosError(error)) {
			yield put(getRouteError({ result: 'error', message: error.message }));
		}
	}
}
