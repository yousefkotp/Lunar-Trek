import styles from "./ExplorationMenu.module.css";
import useAnimate from "../../../../hooks/use-animate";
import legend from "../../../../assets/images/legend.png";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../../../../store/slices/dataSlice";

const ExplorationMenu = (props) => {
	const button1Ref = useAnimate(styles["animate"], false);
	const button2Ref = useAnimate(styles["animate"], false);
	const button3Ref = useAnimate(styles["animate"], false);
	const button4Ref = useAnimate(styles["animate"], false);
	const button5Ref = useAnimate(styles["animate"], false);
	const button6Ref = useAnimate(styles["animate"], false);

	const { nakamura1979MoonquakeData, lognonne2003MoonquakeData } = props;

	const dispatch = useDispatch();
	const {
		toggleTopographicView,
		toggleParallelsAndMeridians,
		toggleSeasAndOceans,
		toggleCratersAndMountains,
		toggleLandingSites,
		setSelectedQuake,
		setViewTimeSeriesData,
	} = dataActions;

	const topographicView = useSelector((state) => state.data.topographicView);
	const parallelsAndMeridians = useSelector(
		(state) => state.data.parallelsAndMeridians
	);
	const seasAndOceans = useSelector((state) => state.data.seasAndOceans);
	const cratersAndMountains = useSelector(
		(state) => state.data.cratersAndMountains
	);
	const landingSites = useSelector((state) => state.data.landingSites);
	const selectedQuake = useSelector((state) => state.data.selectedQuake);
	const viewTimeSeriesData = useSelector(
		(state) => state.data.viewTimeSeriesData
	);

	const toggleTopographicViewHandler = () => {
		dispatch(toggleTopographicView());
	};

	const toggleParallelsAndMeridiansHandler = () => {
		dispatch(toggleParallelsAndMeridians());
	};

	const toggleSeasAndOceansHandler = () => {
		dispatch(toggleSeasAndOceans());
	};

	const toggleCratersAndMountainsHandler = () => {
		dispatch(toggleCratersAndMountains());
	};

	const toggleLandingSitesHandler = () => {
		dispatch(toggleLandingSites());
	};

	const quakeChangeHandler = (event) => {
		if (event.target.value === "") {
			dispatch(setSelectedQuake(null));
		} else {
			dispatch(setSelectedQuake(JSON.parse(event.target.value)));
		}
	};

	const shallowMoonquakesChangeHandler = () => {
		dispatch(
			setViewTimeSeriesData({
				shallowMoonquakes: !viewTimeSeriesData.shallowMoonquakes,
			})
		);
	};

	const deepMoonquakesChangeHandler = () => {
		dispatch(
			setViewTimeSeriesData({
				deepMoonquakes: !viewTimeSeriesData.deepMoonquakes,
			})
		);
	};

	const meteoriteImpactsChangeHandler = () => {
		dispatch(
			setViewTimeSeriesData({
				meteoriteImpacts: !viewTimeSeriesData.meteoriteImpacts,
			})
		);
	};

	const artificialImpactsChangeHandler = () => {
		dispatch(
			setViewTimeSeriesData({
				artificialImpacts: !viewTimeSeriesData.artificialImpacts,
			})
		);
	};

	return (
		<>
			<div className={styles["exploration-menu"]}>
				<div ref={button1Ref} className={styles["hide"]}>
					<button
						className={topographicView ? styles["active"] : ""}
						onClick={toggleTopographicViewHandler}>
						Topographic View
					</button>
				</div>
				<div ref={button2Ref} className={styles["hide"]}>
					<button
						className={
							parallelsAndMeridians ? styles["active"] : ""
						}
						onClick={toggleParallelsAndMeridiansHandler}>
						Parallels and Meridians
					</button>
				</div>
				<div ref={button3Ref} className={styles["hide"]}>
					<button
						className={seasAndOceans ? styles["active"] : ""}
						onClick={toggleSeasAndOceansHandler}>
						Seas and Oceans
					</button>
				</div>
				<div ref={button4Ref} className={styles["hide"]}>
					<button
						className={cratersAndMountains ? styles["active"] : ""}
						onClick={toggleCratersAndMountainsHandler}>
						Craters and Mountains
					</button>
				</div>
				<div ref={button5Ref} className={styles["hide"]}>
					<button
						className={landingSites ? styles["active"] : ""}
						onClick={toggleLandingSitesHandler}>
						Apollo Mission Landing Sites
					</button>
				</div>
				<div
					ref={button6Ref}
					className={styles["hide"]}
					style={viewTimeSeriesData.on ? { opacity: 0 } : {}}>
					<select
						name="quake"
						className={selectedQuake ? styles["active"] : ""}
						disabled={viewTimeSeriesData.on}
						value={
							viewTimeSeriesData.on
								? ""
								: JSON.stringify(selectedQuake)
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
				 ${topographicView ? styles["show-legend"] : ""}
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
			${viewTimeSeriesData.on ? styles["animate"] : ""}`}>
				<div className={styles["legend-checkbox"]}>
					<input
						name="shallow-moonquakes"
						id="shallow-moonquakes"
						type="checkbox"
						disabled={!viewTimeSeriesData.on}
						checked={viewTimeSeriesData.shallowMoonquakes}
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
						disabled={!viewTimeSeriesData.on}
						checked={viewTimeSeriesData.deepMoonquakes}
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
						disabled={!viewTimeSeriesData.on}
						checked={viewTimeSeriesData.meteoriteImpacts}
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
						disabled={!viewTimeSeriesData.on}
						checked={viewTimeSeriesData.artificialImpacts}
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
