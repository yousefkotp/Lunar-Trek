import styles from "./ExploreSection.module.css";
import useAnimate from "../../hooks/use-animate";
import SectionHeader from "../Miscellaneous/SectionHeader";
import { Link } from "react-router-dom";

const ExploreSection = () => {
	const introRef = useAnimate(styles["animate-intro"], false);
	const link1Ref = useAnimate(styles["animate-link"], false);
	const link2Ref = useAnimate(styles["animate-link"], false);

	return (
		<section id="explore" className="light-section">
			<div className="custom-container light-background">
				<div className="container">
					<SectionHeader
						textTheme="dark"
						titleText="Explore Luna"
						subtitleText=""
					/>
					<div className={`text-dark ${styles["explore-container"]}`}>
						<div
							ref={introRef}
							className={`${styles["explore-intro"]}`}>
							<p className="lead">
								Take to the stars and unearth the secrets hidden
								under the surface of Earth's moon. Through the
								power of Unreal Engine 5 and our own custom 3D
								globe of Luna, you can explore the moon's
								geological features and learn about the seismic
								events that shaped our moon as we know it today.
							</p>
						</div>
						<hr />
						<Link
							ref={link1Ref}
							className={`${styles["link"]}`}
							to="/lunar-trek/globe-exploration">
							<h3>Explore a 3D Globe of Luna</h3>
						</Link>
						<Link
							ref={link2Ref}
							className={`${styles["link"]}`}
							to="/lunar-trek/unreal-engine-exploration">
							<h3>Explore Luna in Unreal Engine 5</h3>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExploreSection;
