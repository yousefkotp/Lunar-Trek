import React, { useContext, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import DataContext from "../../../../store/data-context";

const Camera = () => {
	const dataContext = useContext(DataContext);

	const camera = useRef();

	const maxDistance = window.innerWidth <= 768 ? 20.25 : 6.25;
	const defaultDistance = window.innerWidth <= 768 ? -12.5 : -6.25;

	useFrame(() => {
		if (
			dataContext.seasAndOceans ||
			dataContext.cratersAndMountains ||
			dataContext.parallelsAndMeridians ||
			dataContext.viewTimeSeriesData.on ||
			dataContext.landingSites
		) {
			if (camera.current) {
				const cameraPosition = camera.current.position.toArray();
				const positionChangeThreshold = 0.1;
				if (
					Math.abs(
						cameraPosition[0] - dataContext.cameraPosition[0]
					) > positionChangeThreshold ||
					Math.abs(
						cameraPosition[1] - dataContext.cameraPosition[1]
					) > positionChangeThreshold ||
					Math.abs(
						cameraPosition[2] - dataContext.cameraPosition[2]
					) > positionChangeThreshold
				) {
					dataContext.updateCameraPosition(cameraPosition);
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
				autoRotate={dataContext.viewTimeSeriesData.on}
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
