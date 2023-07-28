import { IWaypoints } from '@interfaces/interfaces';
import { Icon } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import { FC } from 'react';
import { Marker } from 'react-leaflet';

const defaultMarker = new Icon({
	iconUrl: icon,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
});

export const Markers: FC<Pick<IWaypoints, 'waypoints'>> = ({ waypoints }) => {
	return (
		<>
			{waypoints.map((waypoint, index) => (
				<Marker key={index} position={waypoint} icon={defaultMarker} />
			))}
		</>
	);
};
