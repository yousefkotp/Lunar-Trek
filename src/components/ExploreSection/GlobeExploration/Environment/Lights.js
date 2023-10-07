const Lights = () => {
	return (
		<>
			<ambientLight intensity={0.1} />
			<directionalLight
				// position={[-400, 0, 100]}
				position={[0, 0, 100]}
				intensity={5}
			/>
		</>
	);
};

export default Lights;
