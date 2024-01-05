import React from "react";
import { Html } from "@react-three/drei";
import styles from "./Marker.module.css";
import { ReactComponent as LocationArrow } from "../../../../assets/icons/location-arrow-thin.svg";
import { useSelector } from "react-redux";

const Marker = (props) => {
	const selectedQuake = useSelector((state) => state.data.selectedQuake);
	const seasAndOceans = useSelector((state) => state.data.seasAndOceans);
	const cratersAndMountains = useSelector(
		(state) => state.data.cratersAndMountains
	);
	const parallelsAndMeridians = useSelector(
		(state) => state.data.parallelsAndMeridians
	);
	const viewTimeSeriesData = useSelector(
		(state) => state.data.viewTimeSeriesData
	);
	const landingSites = useSelector((state) => state.data.landingSites);
	const cameraPosition = useSelector((state) => state.data.cameraPosition);

	const degreeToRadian = (degree) => (degree * Math.PI) / 180.0;

	const currentCameraPosition = cameraPosition;

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
		((seasAndOceans && props.type === "sea/ocean") ||
			(cratersAndMountains && props.type === "crater/mountain") ||
			(parallelsAndMeridians && props.type === "coordinate") ||
			(viewTimeSeriesData.on &&
				(props.type === "SM" ||
					props.type === "SH" ||
					props.type === "M" ||
					props.type[0] === "A" ||
					props.type[0] === "1")) ||
			(landingSites && props.type === "landing site"))
	) {
		distanceToPoint = Math.sqrt(
			Math.pow(currentCameraPosition[0] - position[0], 2) +
				Math.pow(currentCameraPosition[1] - position[1], 2) +
				Math.pow(currentCameraPosition[2] - position[2], 2)
		);

		distanceFromOrigin = Math.sqrt(
			Math.pow(currentCameraPosition[0], 2) +
				Math.pow(currentCameraPosition[1], 2) +
				Math.pow(currentCameraPosition[2], 2)
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
							seasAndOceans &&
							isNearSide
								? styles["animate"]
								: props.type === "crater/mountain" &&
								  cratersAndMountains &&
								  isNearSide
								? styles["animate"]
								: props.type === "landing site" &&
								  landingSites &&
								  isNearSide
								? styles["animate"]
								: props.type === "coordinate" &&
								  parallelsAndMeridians &&
								  isNearSide
								? styles["animate"] + " " + styles["coordinate"]
								: props.type === "quake" && selectedQuake
								? styles["animate"]
								: (props.type === "SM" ||
										props.type === "SH" ||
										props.type === "M" ||
										props.type[0] === "A" ||
										props.type[0] === "1") &&
								  viewTimeSeriesData.on &&
								  isNearSide
								? styles["animate"]
								: ""
						}`}>
						{props.type === "landing site" && (
							// <img
							// 	className={`${styles["landing-site-icon"]} ${
							// 		isNearSide && landingSites
							// 			? styles["animate"]
							// 			: ""
							// 	}`}
							// 	src={locationArrow}
							// 	alt="Landing Site"
							// />
							<LocationArrow
								fill="white"
								className={`${styles["landing-site-icon"]} ${
									isNearSide && landingSites
										? styles["animate"]
										: ""
								}`}
							/>
						)}
						{props.type === "quake" && selectedQuake && (
							<div className={styles["quake-icon"]} />
						)}
						{(props.type === "SM" || props.type === "SH") &&
							viewTimeSeriesData.on &&
							viewTimeSeriesData.shallowMoonquakes &&
							isNearSide && (
								<div className={styles["shallow-quake-icon"]} />
							)}
						{props.type[0] === "A" &&
							viewTimeSeriesData &&
							viewTimeSeriesData.deepMoonquakes &&
							isNearSide && (
								<div className={styles["deep-quake-icon"]} />
							)}
						{props.type[0] === "1" &&
							viewTimeSeriesData &&
							viewTimeSeriesData.artificialImpacts &&
							isNearSide && (
								<div
									className={styles["artificial-quake-icon"]}
								/>
							)}
						{props.type === "M" &&
							viewTimeSeriesData &&
							viewTimeSeriesData.meteoriteImpacts &&
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
