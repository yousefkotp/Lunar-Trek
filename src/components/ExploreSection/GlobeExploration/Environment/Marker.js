import { React, useContext } from "react";
import { Html } from "@react-three/drei";
import styles from "./Marker.module.css";
import DataContext from "../../../../store/data-context";
import locationArrow from "../../../../assets/icons/arrow-icon.png";

const Marker = (props) => {
	const dataContext = useContext(DataContext);

	const degreeToRadian = (degree) => (degree * Math.PI) / 180.0;

	const cameraPosition = dataContext.cameraPosition;

	const position = [
		2 *
			Math.sin(Math.PI / 2 - degreeToRadian(props.latitude)) *
			Math.sin(degreeToRadian(props.longitude)),
		2 * Math.cos(Math.PI / 2 - degreeToRadian(props.latitude)),
		2 *
			Math.sin(Math.PI / 2 - degreeToRadian(props.latitude)) *
			Math.cos(degreeToRadian(props.longitude)),
	];

	let distanceToPoint = 0;
	let distanceFromOrigin = 0;
	let isNearSide = false;

	if (
		props.type !== "quake" &&
		((dataContext.seasAndOceans && props.type === "sea/ocean") ||
			(dataContext.cratersAndMountains &&
				props.type === "crater/mountain") ||
			(dataContext.parallelsAndMeridians &&
				props.type === "coordinate") ||
			(dataContext.viewTimeSeriesData.on &&
				(props.type === "SM" ||
					props.type === "SH" ||
					props.type === "M" ||
					props.type[0] === "A" ||
					props.type[0] === "1")) ||
			(dataContext.landingSites && props.type === "landing site"))
	) {
		distanceToPoint = Math.sqrt(
			Math.pow(cameraPosition[0] - position[0], 2) +
				Math.pow(cameraPosition[1] - position[1], 2) +
				Math.pow(cameraPosition[2] - position[2], 2)
		);

		distanceFromOrigin = Math.sqrt(
			Math.pow(cameraPosition[0], 2) +
				Math.pow(cameraPosition[1], 2) +
				Math.pow(cameraPosition[2], 2)
		);

		isNearSide = distanceToPoint < distanceFromOrigin * 0.95;
	}

	return (
		<group dispose={null} position={position}>
			<mesh>
				<Html distanceFactor={12} className={styles["marker"]}>
					<p
						className={`${styles["marker-name"]} ${
							props.type === "sea/ocean" &&
							dataContext.seasAndOceans &&
							isNearSide
								? styles["animate"]
								: props.type === "crater/mountain" &&
								  dataContext.cratersAndMountains &&
								  isNearSide
								? styles["animate"]
								: props.type === "landing site" &&
								  dataContext.landingSites &&
								  isNearSide
								? styles["animate"]
								: props.type === "coordinate" &&
								  dataContext.parallelsAndMeridians &&
								  isNearSide
								? styles["animate"] + " " + styles["coordinate"]
								: props.type === "quake" &&
								  dataContext.selectedQuake
								? styles["animate"]
								: (props.type === "SM" ||
										props.type === "SH" ||
										props.type === "M" ||
										props.type[0] === "A" ||
										props.type[0] === "1") &&
								  dataContext.viewTimeSeriesData.on &&
								  isNearSide
								? styles["animate"]
								: ""
						}`}>
						{props.type === "landing site" && (
							<img
								className={`${styles["landing-site-icon"]} ${
									isNearSide && dataContext.landingSites
										? styles["animate"]
										: ""
								}`}
								src={locationArrow}
								alt="Landing Site"
							/>
						)}
						{props.type === "quake" &&
							dataContext.selectedQuake && (
								<div className={styles["quake-icon"]} />
							)}
						{(props.type === "SM" || props.type === "SH") &&
							dataContext.viewTimeSeriesData.on &&
							dataContext.viewTimeSeriesData.shallowMoonquakes &&
							isNearSide && (
								<div className={styles["shallow-quake-icon"]} />
							)}
						{props.type[0] === "A" &&
							dataContext.viewTimeSeriesData &&
							dataContext.viewTimeSeriesData.deepMoonquakes &&
							isNearSide && (
								<div className={styles["deep-quake-icon"]} />
							)}
						{props.type[0] === "1" &&
							dataContext.viewTimeSeriesData &&
							dataContext.viewTimeSeriesData.artificialImpacts &&
							isNearSide && (
								<div
									className={styles["artificial-quake-icon"]}
								/>
							)}
						{props.type === "M" &&
							dataContext.viewTimeSeriesData &&
							dataContext.viewTimeSeriesData.meteoriteImpacts &&
							isNearSide && (
								<div className={styles["meteorite-icon"]} />
							)}
						{props.type !== "quake" && props.name}
					</p>
				</Html>
			</mesh>
		</group>
	);
};

export default Marker;
