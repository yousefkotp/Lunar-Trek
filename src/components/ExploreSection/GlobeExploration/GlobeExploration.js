import { Canvas } from "@react-three/fiber";
import styles from "./GlobeExploration.module.css";
import Moon from "./Environment/Moon";
import InformationBox from "./UI/InformationBox";
import ExplorationMenu from "./UI/ExplorationMenu";
import ExplorationMarkers from "./Environment/ExplorationMarkers";
import TimeSeriesChart from "./UI/TimeSeriesChart";
import Camera from "./Environment/Camera";
import Space from "./Environment/Space";
import Lights from "./Environment/Lights";
import nakamura1979MoonquakeData from "../../../assets/data/nakamura1979MoonquakeData";
import lognonne2003MoonquakeData from "../../../assets/data/lognonne2003MoonquakeData";
import seaAndOceanData from "../../../assets/data/seaAndOceanData";
import craterAndMountainData from "../../../assets/data/craterAndMountainData";
import landingSiteData from "../../../assets/data/landingSiteData";

const GlobeExploration = () => {
	const completeMoonquakeData = nakamura1979MoonquakeData.concat(
		lognonne2003MoonquakeData
	);

	return (
		<section className={styles["space"]}>
			<div className={`${styles["exploration-container"]}`}>
				<Canvas>
					<Camera />
					<Space />
					<Lights />
					<Moon />
					<ExplorationMarkers
						completeMoonquakeData={completeMoonquakeData}
						seaAndOceanData={seaAndOceanData}
						craterAndMountainData={craterAndMountainData}
						landingSiteData={landingSiteData}
					/>
				</Canvas>
			</div>
			<div className={`${styles["ui-container"]}`}>
				<ExplorationMenu
					nakamura1979MoonquakeData={nakamura1979MoonquakeData}
					lognonne2003MoonquakeData={lognonne2003MoonquakeData}
				/>
				<InformationBox />
				<TimeSeriesChart data={completeMoonquakeData} />
			</div>
		</section>
	);
};

export default GlobeExploration;
