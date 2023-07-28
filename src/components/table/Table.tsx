import cn from 'classnames';
import { FC, useState } from 'react';

import { TableHeader, TableRow } from '@components/index';

import styles from './Table.module.scss';
import { TableProps } from './Table.props';

export const Table: FC<TableProps> = ({ rows }) => {
	const [activeRow, setActiveRow] = useState<number | null>(null);

	return (
		<table className={styles.table}>
			<TableHeader />
			<tbody>
				{rows.map((row, index) => (
					<TableRow
						key={row.key}
						waypoints={row}
						setActiveRow={setActiveRow}
						className={cn({
							[styles.activeRow]: activeRow === row.key,
						})}
					/>
				))}
			</tbody>
		</table>
	);
};
