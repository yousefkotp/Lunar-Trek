import "./App.css";
import Background from "./components/Background/Background";
import ContactSection from "./components/ContactSection/ContactSection";
import ExploreSection from "./components/ExploreSection/ExploreSection";
import Footer from "./components/Footer/Footer";
import HomeSection from "./components/HomeSection/HomeSection";

const App = () => {
	return (
		<>
			<Background />
			<HomeSection />
			<ExploreSection />
			<ContactSection />
			<Footer />
		</>
	);
};

export default App;
