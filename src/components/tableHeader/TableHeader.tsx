import styles from './TableHeader.module.scss';

export const TableHeader = () => {
	return (
		<thead>
			<tr className={styles.header}>
				<th>Маршрут</th>
				<th>Точка 1 (lat, lng)</th>
				<th>Точка 2 (lat, lng)</th>
				<th>Точка 3 (lat, lng)</th>
			</tr>
		</thead>
	);
};
