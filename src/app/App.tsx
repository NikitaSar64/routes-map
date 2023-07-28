import { defaultWaypoints } from '@constants/constants';
import { Col, Row } from 'antd';
import { FC } from 'react';

import { Map, Table } from '@components/index';

import styles from './App.module.scss';

export const App: FC = () => {
	return (
		<Row className={styles.row}>
			<Col span={12}>
				<Table rows={defaultWaypoints} />
			</Col>
			<Col span={12}>
				<Map />
			</Col>
		</Row>
	);
};
