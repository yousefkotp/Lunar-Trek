import { Group, Line, BufferGeometry, LineBasicMaterial, Vector3 } from "three";

const ParallelsAndMeridians = () => {
	const linesGroup = new Group();

	const createLongitudeLines = (radius, segments) => {
		const longitudeLines = new Group();

		for (let i = 0; i <= segments; i++) {
			const phi = (i / segments) * Math.PI * 2;

			const points = [];
			for (let j = 0; j <= 64; j++) {
				const theta = (j / 64) * Math.PI - Math.PI / 2;
				points.push(
					new Vector3(
						Math.cos(theta) * Math.cos(phi) * radius,
						Math.cos(theta) * Math.sin(phi) * radius,
						Math.sin(theta) * radius
					)
				);
			}

			const geometry = new BufferGeometry().setFromPoints(points);

			const line = new Line(
				geometry,
				new LineBasicMaterial({ color: 0xffffff })
			);
			longitudeLines.add(line);
		}

		return longitudeLines;
	};

	const createLatitudeLines = (radius, segments) => {
		const latitudeLines = new Group();

		for (let i = 1; i < segments; i++) {
			const theta = (i / segments) * Math.PI - Math.PI / 2;

			const points = [];
			for (let j = 0; j <= 64; j++) {
				const phi = (j / 64) * Math.PI * 2;
				points.push(
					new Vector3(
						Math.cos(theta) * Math.cos(phi) * radius,
						Math.cos(theta) * Math.sin(phi) * radius,
						Math.sin(theta) * radius
					)
				);
			}

			const geometry = new BufferGeometry().setFromPoints(points);

			const line = new Line(
				geometry,
				new LineBasicMaterial({ color: 0xffffff })
			);
			latitudeLines.add(line);
		}

		return latitudeLines;
	};

	const longitudeLines = createLongitudeLines(2, 24); //2.05
	const latitudeLines = createLatitudeLines(2, 12); //2.05
	linesGroup.add(longitudeLines);
	linesGroup.add(latitudeLines);

	return <primitive object={linesGroup} rotation={[Math.PI / 2, 0, 0]} />;
};

export default ParallelsAndMeridians;
