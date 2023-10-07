import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import UnrealEngineExploration from "../components/ExploreSection/UnrealEngineExploration/UnrealEngineExploration";
import AnimatedPage from "./AnimatedPage";

const UnrealEngineExplorationPage = () => {
	return (
		<AnimatedPage>
			<NavBar />
			<UnrealEngineExploration />
			<Footer />
		</AnimatedPage>
	);
};

export default UnrealEngineExplorationPage;
