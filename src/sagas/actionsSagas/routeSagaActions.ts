import { IWaypoints } from '@interfaces/interfaces';
import { createAction } from '@reduxjs/toolkit';

export const GET_ROUTE = 'route/getRoute';
export const getRoute = createAction<IWaypoints['waypoints']>(GET_ROUTE);
