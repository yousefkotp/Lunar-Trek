import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Background from "./components/Background/Background";
import ScrollToTop from "./pages/ScrollToTop";
import LandingPage from "./pages/LandingPage";
import GlobeExplorationPage from "./pages/GlobeExplorationPage";
import UnrealEngineExplorationPage from "./pages/UnrealEngineExplorationPage";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
	const location = useLocation();
	return (
		<Provider store={store}>
			<Background />
			<ScrollToTop />
			<AnimatePresence mode="wait">
				<Routes key={location.pathname} location={location}>
					<Route path="/" element={<LandingPage />} />
					<Route
						path="/globe-exploration"
						element={<GlobeExplorationPage />}
					/>
					<Route
						path="/unreal-engine-exploration"
						element={<UnrealEngineExplorationPage />}
					/>
					<Route path="*" element={<LandingPage />} />
				</Routes>
			</AnimatePresence>
		</Provider>
	);
};

export default App;
