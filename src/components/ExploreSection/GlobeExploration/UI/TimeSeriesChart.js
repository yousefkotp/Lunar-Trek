import React, { useContext } from "react";
import DataContext from "../../../../store/data-context";
import styles from "./TimeSeriesChart.module.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const TimeSeriesChart = (props) => {
	const dataContext = useContext(DataContext);

	const dataVisibilities = {
		"Shallow Moonquake": dataContext.viewTimeSeriesData.shallowMoonquakes,
		"Deep Moonquake": dataContext.viewTimeSeriesData.deepMoonquakes,
		"Meteorite Impact": dataContext.viewTimeSeriesData.meteoriteImpacts,
		"Artificial Impact": dataContext.viewTimeSeriesData.artificialImpacts,
	};

	const dataTypeColors = {
		"Shallow Moonquake": "rgb(239, 255, 92)",
		"Deep Moonquake": "rgb(170, 0, 190)",
		"Meteorite Impact": "rgb(0, 175, 90)",
		"Artificial Impact": "rgb(0, 205, 255)",
	};

	const countByYearAndType = (data) => {
		const counts = {};

		data.forEach((item) => {
			const { year, type: typeArray } = item;
			const type = typeArray[1];

			if (!counts[year]) {
				counts[year] = {};
			}

			if (!counts[year][type]) {
				counts[year][type] = 1;
			} else {
				counts[year][type]++;
			}
		});

		return counts;
	};

	const counts = countByYearAndType(props.data);
	const years = Object.keys(counts);
	const types = Array.from(
		new Set(Object.values(counts).flatMap((types) => Object.keys(types)))
	);

	const datasets = types
		.filter((type) => dataVisibilities[type])
		.map((type) => ({
			label: type,
			data: years.map((year) => counts[year][type] || 0),
			borderColor: dataTypeColors[type],
			fill: false,
		}));

	const chartData = {
		labels: years,
		datasets,
	};

	const chartOptions = {
		maintainAspectRatio: false,
		responsive: true,
		scales: {
			x: {
				title: {
					display: true,
					text: "Year",
					font: {
						size: window.innerWidth < 768 ? 6 : 14,
						color: "white",
						family: "Futura PT Ligt, Futura PT, Futura Std",
						weight: "lighter",
					},
					color: "white",
				},
				ticks: {
					color: "white",
					font: {
						size: window.innerWidth < 768 ? 6 : 10,
						family: "Futura PT Ligt, Futura PT, Futura Std",
						color: "white",
						weight: "lighter",
					},
				},
			},
			y: {
				title: {
					display: true,
					text: "Number of Seismic Events",
					font: {
						size: window.innerWidth < 768 ? 6 : 14,
						family: "Futura PT Ligt, Futura PT, Futura Std",
						weight: "lighter",
					},
					color: "white",
				},
				ticks: {
					color: "white",
					font: {
						size: window.innerWidth < 768 ? 6 : 10,
						family: "Futura PT Ligt, Futura PT, Futura Std",
						color: "white",
					},
				},
			},
		},
		plugins: {
			legend: false,
			tooltip: {
				enabled: true,
				displayColors: false,
				usePointStyle: true,
				titleFont: {
					size: 20,
					family: "Futura PT Ligt, Futura PT, Futura Std",
					weight: "lighter",
					color: "white",
				},
				bodyFont: {
					size: 16,
					family: "Futura PT Ligt, Futura PT, Futura Std",
					weight: "lighter",
					color: "white",
				},
				footerFont: {
					size: 14,
					family: "Futura PT Ligt, Futura PT, Futura Std",
					weight: "lighter",
					color: "white",
				},
			},
		},
	};

	return (
		<div
			className={`${styles["chart"]} ${
				dataContext.viewTimeSeriesData.on ? styles["show"] : ""
			}`}>
			<div className={styles["chart-legend"]}>
				<div className={styles["legend"]}>
					<label className="text-light">Shallow Moonquakes</label>
					<div className={styles["shallow-legend"]} />
				</div>
				<div className={styles["legend"]}>
					<label className="text-light">Deep Moonquakes</label>
					<div className={styles["deep-legend"]} />
				</div>
				<div className={styles["legend"]}>
					<label className="text-light">Meteorite Impacts</label>
					<div className={styles["meteorite-legend"]} />
				</div>
				<div className={styles["legend"]}>
					<label className="text-light">Artificial Impacts</label>
					<div className={styles["artificial-legend"]} />
				</div>
			</div>
			<div className={styles["chart-container"]}>
				<Line data={chartData} options={chartOptions} />
			</div>
		</div>
	);
};

export default TimeSeriesChart;
