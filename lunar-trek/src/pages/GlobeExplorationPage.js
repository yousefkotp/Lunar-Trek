import NavBar from "../components/NavBar/NavBar";
import GlobeExploration from "../components/ExploreSection/GlobeExploration/GlobeExploration";
import AnimatedPage from "./AnimatedPage";

const GlobeExplorationPage = () => {
	return (
		<AnimatedPage>
			<NavBar />
			<GlobeExploration />
		</AnimatedPage>
	);
};

export default GlobeExplorationPage;
