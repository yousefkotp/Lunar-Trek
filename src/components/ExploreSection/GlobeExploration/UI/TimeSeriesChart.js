import React from "react";
import { useSelector } from "react-redux";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip as RCTooltip,
	Label,
	ResponsiveContainer,
} from "recharts";
import Tooltip from "./Tooltip";
import styles from "./TimeSeriesChart.module.css";

const TimeSeriesChart = (props) => {
	const viewTimeSeriesData = useSelector(
		(state) => state.data.viewTimeSeriesData
	);

	const dataVisibilities = {
		"Shallow Moonquake": viewTimeSeriesData.shallowMoonquakes,
		"Deep Moonquake": viewTimeSeriesData.deepMoonquakes,
		"Meteorite Impact": viewTimeSeriesData.meteoriteImpacts,
		"Artificial Impact": viewTimeSeriesData.artificialImpacts,
	};

	const dataTypeColors = {
		"Shallow Moonquake": "rgb(239, 255, 92)",
		"Deep Moonquake": "rgb(170, 0, 190)",
		"Meteorite Impact": "rgb(0, 175, 90)",
		"Artificial Impact": "rgb(0, 205, 255)",
	};

	const countByYearAndType = (data) => {
		const counts = {};
		const allTypes = Object.keys(dataTypeColors);

		data.forEach((item) => {
			const { year, type: typeArray } = item;
			const type = typeArray[1];

			if (!counts[year]) {
				counts[year] = {};
				allTypes.forEach((type) => (counts[year][type] = 0)); // Initialize all types to 0
			}

			counts[year][type]++;
		});

		return counts;
	};

	const counts = countByYearAndType(props.data);
	const years = Object.keys(counts).map((year) => ({
		year,
		...counts[year],
	}));

	const lines = Object.keys(dataTypeColors).filter(
		(type) => dataVisibilities[type]
	);

	const size = window.innerWidth < 800 ? 20 : 34;

	return (
		<div
			className={`${styles["chart"]} ${
				viewTimeSeriesData.on ? styles["show"] : ""
			}`}>
			<ResponsiveContainer height="100%" width="100%">
				<LineChart width={800} height={800} data={years}>
					<CartesianGrid stroke="#e9e6e6" strokeWidth={0.3} />
					<XAxis
						dataKey="year"
						height={size}
						stroke="#e9e6e6"
						strokeWidth={0.3}
						className={styles["axis-label"]}
						tick={{ fill: "white" }}>
						<Label
							className={styles["axis-label"]}
							value="Year"
							offset={-2}
							position="insideBottom"
						/>
					</XAxis>
					<YAxis
						width={size + 2}
						className={styles["axis-label"]}
						stroke="#e9e6e6"
						strokeWidth={0.3}
						tick={{ fill: "white" }}>
						<Label
							className={styles["axis-label"]}
							value="Number of Seismic Events"
							angle={-90}
							offset={window.innerWidth < 800 ? 4 : 10}
							position="insideBottomLeft"
						/>
					</YAxis>
					<RCTooltip content={<Tooltip />} />
					{lines.map((type) => (
						<Line
							key={type}
							type="monotone"
							dataKey={type}
							stroke={dataTypeColors[type]}
							// dot={false}
						/>
					))}
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default TimeSeriesChart;
