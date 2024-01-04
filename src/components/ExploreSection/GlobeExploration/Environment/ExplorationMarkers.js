import React from "react";
import Marker from "./Marker";
import ParallelsAndMeridians from "./ParallelsAndMeridians";
import { useSelector } from "react-redux";

const ExplorationMarkers = (props) => {
	const selectedQuake = useSelector((state) => state.data.selectedQuake);
	const parallelsAndMeridians = useSelector(
		(state) => state.data.parallelsAndMeridians
	);
	const viewTimeSeriesData = useSelector(
		(state) => state.data.viewTimeSeriesData
	);

	const {
		completeMoonquakeData,
		seaAndOceanData,
		craterAndMountainData,
		landingSiteData,
	} = props;

	return (
		<>
			{seaAndOceanData.map((location, index) => {
				return (
					<Marker
						key={"SO - " + index}
						type="sea/ocean"
						latitude={location[1]}
						longitude={location[2]}
						name={location[0]}
					/>
				);
			})}
			{craterAndMountainData.map((location, index) => {
				return (
					<Marker
						key={"CM - " + index}
						type="crater/mountain"
						latitude={location[1]}
						longitude={location[2]}
						name={location[0]}
					/>
				);
			})}
			{landingSiteData.map((location, index) => {
				return (
					<Marker
						key={"LS - " + index}
						type="landing site"
						latitude={location[1]}
						longitude={location[2]}
						name={location[0]}
					/>
				);
			})}
			{parallelsAndMeridians && <ParallelsAndMeridians />}
			<Marker
				key={"0°"}
				type="coordinate"
				latitude={0}
				longitude={0}
				name="0°"
			/>
			<Marker
				key={"90°E"}
				type="coordinate"
				latitude={0}
				longitude={90}
				name="+90°"
			/>
			<Marker
				key={"180°"}
				type="coordinate"
				latitude={0}
				longitude={180}
				name="180°"
			/>
			<Marker
				key={"90°W"}
				type="coordinate"
				latitude={0}
				longitude={270}
				name="-90°"
			/>
			<Marker
				key={"90°N"}
				type="coordinate"
				latitude={90}
				longitude={0}
				name="+90°"
			/>
			<Marker
				key={"90°S"}
				type="coordinate"
				latitude={-90}
				longitude={90}
				name="-90°"
			/>
			{selectedQuake &&
				completeMoonquakeData.find((quake, index) => {
					return (
						quake.year === selectedQuake.year &&
						quake.day === selectedQuake.day &&
						quake.hour === selectedQuake.hour &&
						quake.minute === selectedQuake.minute &&
						quake.seconds === selectedQuake.seconds &&
						quake.latitude === selectedQuake.latitude &&
						quake.longitude === selectedQuake.longitude &&
						quake.magnitude === selectedQuake.magnitude
					);
				}) && (
					<Marker
						key={
							"Q - " +
							selectedQuake.year +
							"/" +
							selectedQuake.day
						}
						type="quake"
						latitude={selectedQuake.latitude}
						longitude={selectedQuake.longitude}
					/>
				)}
			{viewTimeSeriesData.on &&
				completeMoonquakeData.map((quake, index) => {
					return (
						<Marker
							key={"TS - " + index}
							type={quake.type[0]}
							latitude={quake.latitude}
							longitude={quake.longitude}
						/>
					);
				})}
		</>
	);
};

export default ExplorationMarkers;
