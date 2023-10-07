import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Background from "./components/Background/Background";
import LandingPage from "./pages/LandingPage";

const App = () => {
	const location = useLocation();
	return (
		<>
			<Background />
			<Routes key={location.pathname} location={location}>
				<Route path="/" element={<LandingPage />} exact />
				<Route path="*" element={<LandingPage />} />
			</Routes>
		</>
	);
};

export default App;
