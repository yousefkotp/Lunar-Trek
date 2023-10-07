import NavBar from "../components/NavBar/NavBar";
import HomeSection from "../components/HomeSection/HomeSection";
import ExploreSection from "../components/ExploreSection/ExploreSection";
import AboutSection from "../components/AboutSection/AboutSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import AnimatedPage from "./AnimatedPage";

const LandingPage = () => {
	return (
		<AnimatedPage>
			<NavBar />
			<HomeSection />
			<ExploreSection />
			<AboutSection />
			<ContactSection />
			<Footer />
		</AnimatedPage>
	);
};

export default LandingPage;
