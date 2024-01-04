import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../../../store/slices/dataSlice";

const Camera = () => {
	const dispatch = useDispatch();
	const { updateCameraPosition } = dataActions;
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

	const camera = useRef();

	const maxDistance = window.innerWidth <= 768 ? 20.25 : 6.25;
	const defaultDistance = window.innerWidth <= 768 ? -12.5 : -6.25;

	useFrame(() => {
		if (
			seasAndOceans ||
			cratersAndMountains ||
			parallelsAndMeridians ||
			viewTimeSeriesData.on ||
			landingSites
		) {
			if (camera.current) {
				const currentCameraPosition = camera.current.position.toArray();
				const positionChangeThreshold = 1;
				if (
					Math.abs(currentCameraPosition[0] - cameraPosition[0]) >
						positionChangeThreshold ||
					Math.abs(currentCameraPosition[1] - cameraPosition[1]) >
						positionChangeThreshold ||
					Math.abs(currentCameraPosition[2] - cameraPosition[2]) >
						positionChangeThreshold
				) {
					dispatch(updateCameraPosition(currentCameraPosition));
				}
			}
		}
	});

	return (
		<>
			<OrbitControls
				enableZoom={true}
				minDistance={3.5}
				maxDistance={maxDistance}
				enablePan={true}
				autoRotate={viewTimeSeriesData.on}
			/>
			<PerspectiveCamera
				ref={camera}
				makeDefault
				position={[defaultDistance, -2.25, 3.5]}
			/>
		</>
	);
};

export default Camera;
