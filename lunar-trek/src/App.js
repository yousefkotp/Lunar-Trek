import "./App.css";
import Background from "./components/Background/Background";
import ExploreSection from "./components/ExploreSection/ExploreSection";
import Footer from "./components/Footer/Footer";
import HomeSection from "./components/HomeSection/HomeSection";

const App = () => {
	return (
		<>
			<Background />
			<HomeSection />
			<ExploreSection />
			<Footer />
		</>
	);
};

export default App;
