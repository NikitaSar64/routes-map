import { IWaypoints } from '@interfaces/interfaces';
import { Dispatch, HTMLAttributes, SetStateAction } from 'react';

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
	waypoints: IWaypoints;
	setActiveRow: Dispatch<SetStateAction<number | null>>;
}
