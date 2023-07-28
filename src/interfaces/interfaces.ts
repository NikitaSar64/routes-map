export interface IRouteList {
	title: string;
	dataIndex: string;
	key: string;
}

export interface IWaypoints {
	key: number;
	name: string;
	waypoints: [number, number][];
}

export interface IRouteState {
	coordinates: [number, number][];
	waypoints: IWaypoints['waypoints'];
	status: IStatus | null;
}

export interface IStatus {
	result: 'loading' | 'error' | 'success';
	message?: string;
}

interface IApiRoutes {
	geometry: {
		coordinates: [number, number][];
	};
}

interface IApiWaypoint {
	location: [number, number];
}

export interface IApiResponse {
	code: string;
	routes: IApiRoutes[];
	waypoints: IApiWaypoint[];
}

export interface IRouteSagaAction {
	payload: IWaypoints['waypoints'];
	type: string;
}
