import { Stars } from "@react-three/drei";

const Space = () => {
	return (
		<Stars
			radius={300}
			depth={100}
			count={1000}
			factor={10}
			saturation={0}
			fade={true}
		/>
	);
};

export default Space;
