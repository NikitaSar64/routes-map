import { BASE_URL } from '@constants/constants';
import { convertCoordinatesToString } from '@helpers/convertCoordinatesToString';
import { IApiResponse } from '@interfaces/interfaces';
import axios from 'axios';

export const getRouteApi = async (coordinates: [number, number][]) => {
	const response = await axios.get<IApiResponse>(
		BASE_URL + convertCoordinatesToString(coordinates),
		{
			params: {
				geometries: 'geojson',
			},
		}
	);
	return response.data;
};
