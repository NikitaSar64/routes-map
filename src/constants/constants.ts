import { IWaypoints } from '@interfaces/interfaces';

export const BASE_URL = 'http://router.project-osrm.org/route/v1/drive/';

export const defaultWaypoints: IWaypoints[] = [
	{
		key: 1,
		name: 'Маршрут 1',
		waypoints: [
			[59.84660399, 30.29496392],
			[59.82934196, 30.42423701],
			[59.83567701, 30.38064206],
		],
	},
	{
		key: 2,
		name: 'Маршрут 2',
		waypoints: [
			[59.82934196, 30.42423701],
			[59.82761295, 30.41705607],
			[59.84660399, 30.29496392],
		],
	},
	{
		key: 3,
		name: 'Маршрут 3',
		waypoints: [
			[59.83567701, 30.38064206],
			[59.84660399, 30.29496392],
			[59.82761295, 30.41705607],
		],
	},
];
