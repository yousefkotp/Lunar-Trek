import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	topographicView: false,
	parallelsAndMeridians: false,
	seasAndOceans: false,
	cratersAndMountains: false,
	landingSites: false,
	selectedQuake: null,
	viewTimeSeriesData: {
		on: false,
		shallowMoonquakes: false,
		deepMoonquakes: false,
		meteoriteImpacts: false,
		artificialImpacts: false,
	},
	cameraPosition: [-6.25, -2.25, 3.5],
};

const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		toggleTopographicView: (state) => {
			state.topographicView = !state.topographicView;
		},
		toggleParallelsAndMeridians: (state) => {
			state.parallelsAndMeridians = !state.parallelsAndMeridians;
		},
		toggleSeasAndOceans: (state) => {
			state.seasAndOceans = !state.seasAndOceans;
		},
		toggleCratersAndMountains: (state) => {
			state.cratersAndMountains = !state.cratersAndMountains;
		},
		toggleLandingSites: (state) => {
			state.landingSites = !state.landingSites;
		},
		setSelectedQuake: (state, action) => {
			state.selectedQuake = action.payload;
		},
		setViewTimeSeriesData: (state, action) => {
			state.viewTimeSeriesData = {
				...state.viewTimeSeriesData,
				...action.payload,
			};
		},
		updateCameraPosition: (state, action) => {
			state.cameraPosition = action.payload;
		},
		reset: () => initialState,
	},
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
