import React from "react";

const DataContext = React.createContext({
	topographicView: false,
	toggleTopographicView: () => {},
	parallelsAndMeridians: false,
	toggleParallelsAndMeridians: () => {},
	seasAndOceans: false,
	toggleSeasAndOceans: () => {},
	cratersAndMountains: false,
	toggleCratersAndMountains: () => {},
	landingSites: false,
	toggleLandingSites: () => {},
	selectedQuake: null,
	setSelectedQuake: () => {},
	viewTimeSeriesData: null,
	setViewTimeSeriesData: () => {},
	cameraPosition: null,
	updateCameraPosition: () => {},
	reset: () => {},
});

export default DataContext;
