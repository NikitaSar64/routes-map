import { IRouteState } from '@interfaces/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IRouteState = {
	coordinates: [],
	waypoints: [],
	status: null,
};

export const routeSlice = createSlice({
	name: 'route',
	initialState,
	reducers: {
		getRouteSuccess: (state, action: PayloadAction<IRouteState>) => {
			state.coordinates = action.payload.coordinates;
			state.waypoints = action.payload.waypoints;
			state.status = action.payload.status;
		},

		getRouteError: (state, action: PayloadAction<IRouteState['status']>) => {
			state.status = action.payload;
		},
		getRouteLoading: (state, action: PayloadAction<IRouteState['status']>) => {
			state.status = action.payload;
		},
	},
});

export const { getRouteSuccess, getRouteError, getRouteLoading } =
	routeSlice.actions;
