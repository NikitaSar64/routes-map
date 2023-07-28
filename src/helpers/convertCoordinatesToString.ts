export const convertCoordinatesToString = (coordinates: [number, number][]) => {
	return coordinates.map(([lat, lng]) => [lng, lat].join(',')).join(';');
};
