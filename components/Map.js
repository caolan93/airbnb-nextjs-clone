import ReactMapGL from "react-map-gl";

import { useState } from "react";

const Map = () => {
	const [viewport, setViewPort] = useState({
		width: "100%",
		height: "100%",
		latitude: 37.7577,
		longitude: -122.4376,
		zoom: 11,
	});

	const API_KEY = process.env.API_KEY;
	return (
		<ReactMapGL
			mapStyle='mapbox://styles/caolannn93/cks7tzp52d53v18nxfp50jy33'
			mapboxApiAccessToken={API_KEY}
			{...viewport}></ReactMapGL>
	);
};

export default Map;
