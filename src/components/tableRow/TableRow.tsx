import { getRoute } from '@sagas/actionsSagas/routeSagaActions';
import cn from 'classnames';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

import styles from './TableRow.module.scss';
import { TableRowProps } from './TableRow.props';

export const TableRow: FC<TableRowProps> = ({
	waypoints: { waypoints, name, key },
	setActiveRow,
	className,
}) => {
	const dispatch = useDispatch();

	const selectActiveRow = () => {
		setActiveRow(key);
		dispatch(getRoute(waypoints));
	};

	return (
		<tr className={cn(styles.row, className)} onClick={selectActiveRow}>
			<td>{name}</td>
			{waypoints.map(([lat, lng], index) => (
				<td key={index}>{`[${lat}, ${lng}]`}</td>
			))}
		</tr>
	);
};
