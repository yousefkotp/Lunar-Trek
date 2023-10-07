import "./App.css";
import AboutSection from "./components/AboutSection/AboutSection";
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
			<AboutSection />
			<ContactSection />
			<Footer />
		</>
	);
};

export default App;
