import React from "react";
import styles from "./InformationBox.module.css";
import { useSelector } from "react-redux";

const InformationBox = () => {
	const selectedQuake = useSelector((state) => state.data.selectedQuake);

	const formatTime = (hour, minute, seconds) => `${
		hour?.toString().padStart(2, "0") || "N/A"
	}:
		${minute?.toString().padStart(2, "0") || "N/A"}:
		${seconds?.toString().padStart(2, "0") || "N/A"}`;

	const formatDate = (year, day) =>
		`${year || "N/A"}/${day?.toString().padStart(3, "0") || "N/A"}`;

	const formatCoordinates = (latitude, longitude) =>
		`${latitude || "N/A"}°, ${longitude || "N/A"}°`;

	return (
		<div
			className={`text-light ${styles["information-box"]} ${
				selectedQuake ? styles["animate"] : ""
			}`}>
			<h2>Seismic Event:</h2>
			<hr />
			<p>Type: {selectedQuake?.type?.join(" - ") || "N/A"}</p>
			<p>
				Date of detection:{" "}
				{selectedQuake
					? formatDate(selectedQuake?.year, selectedQuake?.day)
					: "N/A"}
			</p>
			<p>
				Time of detection:{" "}
				{selectedQuake
					? formatTime(
							selectedQuake?.hour,
							selectedQuake?.minute,
							selectedQuake?.seconds
					  )
					: "N/A"}
			</p>
			<p>
				Epicentre:{" "}
				{selectedQuake
					? formatCoordinates(
							selectedQuake?.latitude,
							selectedQuake?.longitude
					  )
					: "N/A"}
			</p>
			<p>Magnitude: {selectedQuake?.magnitude || "N/A"}</p>
			<p>
				Depth:{" "}
				{selectedQuake?.depth && selectedQuake?.depth > 0
					? `${selectedQuake.depth} km`
					: "N/A"}
			</p>
			<p>
				Detected by Apollo Site(s):{" "}
				{selectedQuake?.station
					?.map((station) => station.value)
					.join(" ") || "N/A"}
			</p>
		</div>
	);
};

export default InformationBox;
