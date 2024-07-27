import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import moon from "../../../../assets/images/moon.jpg";
import topography from "../../../../assets/images/topography.jpg";
import { useSelector } from "react-redux";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { Mesh, SphereGeometry, MeshStandardMaterial } from "three";

const Moon = () => {
	const moonTexture = useLoader(TextureLoader, moon);
	const topographyTexture = useLoader(TextureLoader, topography);
	const topographicView = useSelector((state) => state.data.topographicView);

	return (
		<mesh>
			<sphereGeometry
				attach="geometry"
				args={[2, 64, 64, -Math.PI / 2]}
			/>
			<meshStandardMaterial
				map={topographicView === true ? topographyTexture : moonTexture}
			/>
		</mesh>
	);
};

export default Moon;

// const Moon = () => {
// 	const moonGLTF = useLoader(GLTFLoader, "/assets/scenes/Moon_1_3474.glb");
// 	const topographyTexture = useLoader(TextureLoader, topography);
// 	const moon = moonGLTF.scene;
// 	const geometry = new SphereGeometry(2, 64, 64, -Math.PI / 2);
// 	const material = new MeshStandardMaterial({ map: topographyTexture });
// 	const topographySphere = new Mesh(geometry, material);

// 	const topographicView = useSelector((state) => state.data.topographicView);

// 	return (
// 		<primitive
// 			object={topographicView ? topographySphere : moon}
// 			scale={topographicView ? 1 : 0.004}
// 			position={[0, 0, 0]}
// 			rotation={topographicView ? [0, 0, 0] : [0, Math.PI / 2, 0]}
// 		/>
// 	);
// };

// export default Moon;
