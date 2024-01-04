import { useContext } from "react";
import styles from "./ExplorationMenu.module.css";
import useAnimate from "../../../../hooks/use-animate";
import DataContext from "../../../../store/data-context";
import legend from "../../../../assets/images/legend.png";

const ExplorationMenu = (props) => {
	const button1Ref = useAnimate(styles["animate"], false);
	const button2Ref = useAnimate(styles["animate"], false);
	const button3Ref = useAnimate(styles["animate"], false);
	const button4Ref = useAnimate(styles["animate"], false);
	const button5Ref = useAnimate(styles["animate"], false);
	const button6Ref = useAnimate(styles["animate"], false);

	const { nakamura1979MoonquakeData, lognonne2003MoonquakeData } = props;

	const dataContext = useContext(DataContext);

	const quakeChangeHandler = (event) => {
		if (event.target.value === "") {
			dataContext.setSelectedQuake(null);
		} else {
			dataContext.setSelectedQuake(JSON.parse(event.target.value));
		}
	};

	const shallowMoonquakesChangeHandler = () => {
		dataContext.setViewTimeSeriesData({
			shallowMoonquakes:
				!dataContext.viewTimeSeriesData.shallowMoonquakes,
		});
	};

	const deepMoonquakesChangeHandler = () => {
		dataContext.setViewTimeSeriesData({
			deepMoonquakes: !dataContext.viewTimeSeriesData.deepMoonquakes,
		});
	};

	const meteoriteImpactsChangeHandler = () => {
		dataContext.setViewTimeSeriesData({
			meteoriteImpacts: !dataContext.viewTimeSeriesData.meteoriteImpacts,
		});
	};

	const artificialImpactsChangeHandler = () => {
		dataContext.setViewTimeSeriesData({
			artificialImpacts:
				!dataContext.viewTimeSeriesData.artificialImpacts,
		});
	};

	return (
		<>
			<div className={styles["exploration-menu"]}>
				<div ref={button1Ref} className={styles["hide"]}>
					<button
						className={
							dataContext.topographicView ? styles["active"] : ""
						}
						onClick={dataContext.toggleTopographicView}>
						Topographic View
					</button>
				</div>
				<div ref={button2Ref} className={styles["hide"]}>
					<button
						className={
							dataContext.parallelsAndMeridians
								? styles["active"]
								: ""
						}
						onClick={dataContext.toggleParallelsAndMeridians}>
						Parallels and Meridians
					</button>
				</div>
				<div ref={button3Ref} className={styles["hide"]}>
					<button
						className={
							dataContext.seasAndOceans ? styles["active"] : ""
						}
						onClick={dataContext.toggleSeasAndOceans}>
						Seas and Oceans
					</button>
				</div>
				<div ref={button4Ref} className={styles["hide"]}>
					<button
						className={
							dataContext.cratersAndMountains
								? styles["active"]
								: ""
						}
						onClick={dataContext.toggleCratersAndMountains}>
						Craters and Mountains
					</button>
				</div>
				<div ref={button5Ref} className={styles["hide"]}>
					<button
						className={
							dataContext.landingSites ? styles["active"] : ""
						}
						onClick={dataContext.toggleLandingSites}>
						Apollo Mission Landing Sites
					</button>
				</div>
				<div
					ref={button6Ref}
					className={styles["hide"]}
					style={
						dataContext.viewTimeSeriesData.on ? { opacity: 0 } : {}
					}>
					<select
						name="quake"
						className={
							dataContext.selectedQuake ? styles["active"] : ""
						}
						disabled={dataContext.viewTimeSeriesData.on}
						value={
							dataContext.viewTimeSeriesData.on
								? ""
								: JSON.stringify(dataContext.selectedQuake)
						}
						onChange={quakeChangeHandler}>
						<option value="">Select a Seismic Event</option>
						{nakamura1979MoonquakeData.map((quake, idx) => {
							return (
								<option
									key={"1979 - " + idx}
									value={JSON.stringify(quake)}>
									{"Nakamura 1979 - " +
										(quake.type
											? quake.type[0] + " - "
											: "N/A - ") +
										quake.year +
										"/" +
										quake.day.toString().padStart(3, "0")}
								</option>
							);
						})}
						{lognonne2003MoonquakeData.map((quake, idx) => {
							return (
								<option
									key={"2003 - " + idx}
									value={JSON.stringify(quake)}>
									{"Lognonné 2003 - " +
										(quake.type
											? quake.type[0] + " - "
											: "N/A - ") +
										quake.year +
										"/" +
										quake.day.toString().padStart(3, "0")}
								</option>
							);
						})}
					</select>
				</div>
				<div
					className={`${styles["legend-container"]}
				 ${dataContext.topographicView ? styles["show-legend"] : ""}
				 `}>
					<p>Elevation (m):</p>
					<div className={styles["legend-text-container"]}>
						<p>+10780</p>
						<p>-9130</p>
					</div>
					<img
						src={legend}
						alt="Topographic View Legend"
						className={styles["legend"]}
					/>
				</div>
			</div>
			<div
				className={`${styles["checkboxes"]} 
			${dataContext.viewTimeSeriesData.on ? styles["animate"] : ""}`}>
				<div className={styles["legend-checkbox"]}>
					<input
						name="shallow-moonquakes"
						id="shallow-moonquakes"
						type="checkbox"
						disabled={!dataContext.viewTimeSeriesData.on}
						checked={
							dataContext.viewTimeSeriesData.shallowMoonquakes
						}
						onChange={shallowMoonquakesChangeHandler}
					/>
					<label htmlFor="shallow-moonquakes" className="text-light">
						Shallow Moonquakes
					</label>
					<div className={styles["shallow-legend"]} />
				</div>
				<div className={styles["legend-checkbox"]}>
					<input
						type="checkbox"
						name="deep-moonquakes"
						id="deep-moonquakes"
						disabled={!dataContext.viewTimeSeriesData.on}
						checked={dataContext.viewTimeSeriesData.deepMoonquakes}
						onChange={deepMoonquakesChangeHandler}
					/>
					<label htmlFor="deep-moonquakes" className="text-light">
						Deep Moonquakes
					</label>
					<div className={styles["deep-legend"]} />
				</div>
				<div className={styles["legend-checkbox"]}>
					<input
						type="checkbox"
						name="meteorite-impacts"
						id="meteorite-impacts"
						disabled={!dataContext.viewTimeSeriesData.on}
						checked={
							dataContext.viewTimeSeriesData.meteoriteImpacts
						}
						onChange={meteoriteImpactsChangeHandler}
					/>
					<label htmlFor="meteorite-impacts" className="text-light">
						Meteorite Impacts
					</label>
					<div className={styles["meteorite-legend"]} />
				</div>
				<div className={styles["legend-checkbox"]}>
					<input
						type="checkbox"
						name="artificial-impacts"
						id="artificial-impacts"
						disabled={!dataContext.viewTimeSeriesData.on}
						checked={
							dataContext.viewTimeSeriesData.artificialImpacts
						}
						onChange={artificialImpactsChangeHandler}
					/>
					<label htmlFor="artificial-impacts" className="text-light">
						Artificial Impacts
					</label>
					<div className={styles["artificial-legend"]} />
				</div>
			</div>
		</>
	);
};

export default ExplorationMenu;
