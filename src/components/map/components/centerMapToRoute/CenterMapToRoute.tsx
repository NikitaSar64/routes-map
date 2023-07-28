import { FC } from 'react';
import { useMap } from 'react-leaflet';

import { CenterMapToRouteProps } from './CenterMapToRoute.props';

export const CenterMapToRoute: FC<CenterMapToRouteProps> = ({
	routeCoordinates,
}) => {
	const map = useMap();

	if (routeCoordinates.length > 0) {
		map.fitBounds(routeCoordinates, { padding: [30, 30] });
	}

	return null;
};
