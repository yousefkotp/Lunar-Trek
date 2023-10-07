import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Background from "./components/Background/Background";
import ScrollToTop from "./pages/ScrollToTop";
import LandingPage from "./pages/LandingPage";
import UnrealEngineExplorationPage from "./pages/UnrealEngineExplorationPage";

const App = () => {
	const location = useLocation();
	return (
		<>
			<Background />
			<ScrollToTop />
			<AnimatePresence mode="wait">
				<Routes key={location.pathname} location={location}>
					<Route path="/" element={<LandingPage />} exact />
					<Route
						path="/unreal-engine-exploration"
						element={<UnrealEngineExplorationPage />}
						exact
					/>
					<Route path="*" element={<LandingPage />} />
				</Routes>
			</AnimatePresence>
		</>
	);
};

export default App;
