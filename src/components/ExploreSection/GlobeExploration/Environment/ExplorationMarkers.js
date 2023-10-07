import React, { useContext } from "react";
import DataContext from "../../../../store/data-context";
import Marker from "./Marker";
import ParallelsAndMeridians from "./ParallelsAndMeridians";

const ExplorationMarkers = (props) => {
	const dataContext = useContext(DataContext);

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
			{dataContext.parallelsAndMeridians && <ParallelsAndMeridians />}
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
			{dataContext.selectedQuake &&
				completeMoonquakeData.find((quake, index) => {
					return (
						quake.year === dataContext.selectedQuake.year &&
						quake.day === dataContext.selectedQuake.day &&
						quake.hour === dataContext.selectedQuake.hour &&
						quake.minute === dataContext.selectedQuake.minute &&
						quake.seconds === dataContext.selectedQuake.seconds &&
						quake.latitude === dataContext.selectedQuake.latitude &&
						quake.longitude ===
							dataContext.selectedQuake.longitude &&
						quake.magnitude === dataContext.selectedQuake.magnitude
					);
				}) && (
					<Marker
						key={
							"Q - " +
							dataContext.selectedQuake.year +
							"/" +
							dataContext.selectedQuake.day
						}
						type="quake"
						latitude={dataContext.selectedQuake.latitude}
						longitude={dataContext.selectedQuake.longitude}
					/>
				)}
			{dataContext.viewTimeSeriesData.on &&
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
