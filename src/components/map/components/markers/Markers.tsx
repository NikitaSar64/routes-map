import { IWaypoints } from '@interfaces/interfaces';
import { FC } from 'react';
import { Marker } from 'react-leaflet';

export const Markers: FC<Pick<IWaypoints, 'waypoints'>> = ({ waypoints }) => {
	return (
		<>
			{waypoints.map((waypoint, index) => (
				<Marker key={index} position={waypoint} />
			))}
		</>
	);
};
