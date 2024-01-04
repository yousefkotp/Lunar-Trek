import { React, useContext } from "react";
import styles from "./InformationBox.module.css";
import DataContext from "../../../../store/data-context";

const InformationBox = () => {
	const dataContext = useContext(DataContext);

	return (
		<div
			className={`text-light ${styles["information-box"]} ${
				dataContext.selectedQuake ? styles["animate"] : ""
			}`}>
			<h2>Seismic Event:</h2>
			<hr />
			<p>
				Type:{" "}
				{dataContext.selectedQuake && dataContext.selectedQuake.type
					? dataContext.selectedQuake.type[0] +
					  " - " +
					  dataContext.selectedQuake.type[1]
					: "N/A"}
			</p>
			<p>
				Date of detection:{" "}
				{dataContext.selectedQuake && dataContext.selectedQuake.year}/
				{dataContext.selectedQuake &&
					dataContext.selectedQuake.day.toString().padStart(3, "0")}
			</p>
			<p>
				Time of detection :{" "}
				{dataContext.selectedQuake &&
					dataContext.selectedQuake.hour.toString().padStart(2, "0")}
				:
				{dataContext.selectedQuake &&
					dataContext.selectedQuake.minute
						.toString()
						.padStart(2, "0")}
				:
				{dataContext.selectedQuake &&
					Math.floor(dataContext.selectedQuake.seconds)
						.toString()
						.padStart(2, "0")}
			</p>
			<p>
				Epicentre :{" "}
				{dataContext.selectedQuake &&
					dataContext.selectedQuake.latitude}
				{"°"}
				{", "}
				{dataContext.selectedQuake &&
					dataContext.selectedQuake.longitude}
				{"°"}
			</p>
			<p>
				Magnitude:{" "}
				{dataContext.selectedQuake &&
				dataContext.selectedQuake.magnitude
					? dataContext.selectedQuake.magnitude
					: "N/A"}
			</p>
			<p>
				Depth:{" "}
				{dataContext.selectedQuake &&
				dataContext.selectedQuake.depth &&
				dataContext.selectedQuake.depth > 0
					? dataContext.selectedQuake.depth + " km"
					: "N/A"}
			</p>
			<p>
				Detected by Apollo Site(s):{" "}
				{dataContext.selectedQuake &&
				dataContext.selectedQuake.station &&
				dataContext.selectedQuake.station.length === 0
					? "N/A"
					: dataContext.selectedQuake &&
					  dataContext.selectedQuake.station
					? dataContext.selectedQuake.station
							.map((station, index) => {
								return station.value;
							})
							.join(" ")
					: "N/A"}
			</p>
		</div>
	);
};

export default InformationBox;
