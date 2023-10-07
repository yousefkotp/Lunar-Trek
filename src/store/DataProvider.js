import { useState } from "react";
import DataContext from "./data-context";

const DataProvider = (props) => {
	const [topographicView, setTopographicView] = useState(false);
	const [parallelsAndMeridians, setParallelsAndMeridians] = useState(false);
	const [seasAndOceans, setSeasAndOceans] = useState(false);
	const [cratersAndMountains, setCratersAndMountains] = useState(false);
	const [landingSites, setLandingSites] = useState(false);
	const [selectedQuake, setSelectedQuake] = useState(null);
	const [viewTimeSeriesData, setViewTimeSeriesData] = useState({
		on: false,
		shallowMoonquakes: false,
		deepMoonquakes: false,
		meteoriteImpacts: false,
		artificialImpacts: false,
	});
	const [cameraPosition, setCameraPosition] = useState([-6.25, -2.25, 3.5]);

	const toggleTopographicView = () => {
		setTopographicView(!topographicView);
	};

	const toggleParallelsAndMeridians = () => {
		setParallelsAndMeridians(!parallelsAndMeridians);
	};

	const toggleSeasAndOceans = () => {
		setSeasAndOceans(!seasAndOceans);
	};

	const toggleCratersAndMountains = () => {
		setCratersAndMountains(!cratersAndMountains);
	};

	const toggleLandingSites = () => {
		setLandingSites(!landingSites);
	};

	const changeSelectedQuake = (quake) => {
		setSelectedQuake(quake);
	};

	const changeViewTimeSeriesData = (value) => {
		setViewTimeSeriesData((prevData) => ({
			...prevData,
			...value,
		}));
	};

	const updateCameraPosition = (position) => {
		setCameraPosition(position);
	};

	const reset = () => {
		setTopographicView(false);
		setParallelsAndMeridians(false);
		setSeasAndOceans(false);
		setCratersAndMountains(false);
		setLandingSites(false);
		setSelectedQuake(null);
		setViewTimeSeriesData({
			on: false,
			shallowMoonquakes: false,
			deepMoonquakes: false,
			meteoriteImpacts: false,
			artificialImpacts: false,
		});
		setCameraPosition([-6.25, -2.25, 3.5]);
	};

	const context = {
		topographicView,
		toggleTopographicView,
		parallelsAndMeridians,
		toggleParallelsAndMeridians,
		seasAndOceans,
		toggleSeasAndOceans,
		cratersAndMountains,
		toggleCratersAndMountains,
		landingSites,
		toggleLandingSites,
		selectedQuake,
		setSelectedQuake: changeSelectedQuake,
		viewTimeSeriesData,
		setViewTimeSeriesData: changeViewTimeSeriesData,
		cameraPosition,
		updateCameraPosition,
		reset,
	};

	return (
		<DataContext.Provider value={context}>
			{props.children}
		</DataContext.Provider>
	);
};

export default DataProvider;
