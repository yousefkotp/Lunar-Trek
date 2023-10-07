import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Background from "./components/Background/Background";
import ScrollToTop from "./pages/ScrollToTop";
import LandingPage from "./pages/LandingPage";
import GlobeExplorationPage from "./pages/GlobeExplorationPage";
import UnrealEngineExplorationPage from "./pages/UnrealEngineExplorationPage";
import DataProvider from "./store/DataProvider";

const App = () => {
	const location = useLocation();
	return (
		<DataProvider>
			<Background />
			<ScrollToTop />
			<AnimatePresence mode="wait">
				<Routes key={location.pathname} location={location}>
					<Route path="/" element={<LandingPage />} exact />
					<Route
						path="/globe-exploration"
						element={<GlobeExplorationPage />}
						exact
					/>
					<Route
						path="/unreal-engine-exploration"
						element={<UnrealEngineExplorationPage />}
						exact
					/>
					<Route path="*" element={<LandingPage />} />
				</Routes>
			</AnimatePresence>
		</DataProvider>
	);
};

export default App;
