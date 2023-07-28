import { Spin as SpinAntd } from 'antd';
import { FC } from 'react';

import styles from './Spin.module.scss';
import { SpinProps } from './Spin.props';

export const Spin: FC<SpinProps> = ({ title, size = 'default' }) => {
	return (
		<div className={styles.spinWrapper}>
			<SpinAntd tip={title} size={size}>
				<div className="content" />
			</SpinAntd>
		</div>
	);
};
