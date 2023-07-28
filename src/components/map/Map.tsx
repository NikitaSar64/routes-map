import { Alert } from 'antd';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';

import { Spin } from '@components/index';
import { CenterMapToRoute, Markers } from '@components/map/components/index';

import { useTypedSelector } from '@hooks/useTypedSelector';

import styles from './Map.module.scss';

export const Map = () => {
	const { coordinates, waypoints, status } = useTypedSelector(
		(state) => state.route
	);

	return (
		<MapContainer zoom={10} scrollWheelZoom={false} className={styles.map}>
			{!status && (
				<Alert
					message="Выберите маршрут"
					type="info"
					className={styles.center}
				/>
			)}
			{status?.result === 'loading' && <Spin title="Loading" size="large" />}
			{status?.result === 'success' && (
				<>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Markers waypoints={waypoints} />
					<Polyline positions={coordinates} />
					<CenterMapToRoute routeCoordinates={coordinates} />
				</>
			)}

			{status?.result === 'error' && (
				<Alert
					message={status.result}
					description={status.message}
					className={styles.center}
					type="error"
				/>
			)}
		</MapContainer>
	);
};
