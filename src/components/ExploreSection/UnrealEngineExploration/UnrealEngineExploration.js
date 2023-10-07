import SectionHeader from "../../Miscellaneous/SectionHeader";
import styles from "./UnrealEngineExploration.module.css";
import useAnimate from "../../../hooks/use-animate";
// import neural from "../../../assets/images/neural1.mp4";

const UnrealEngineExploration = () => {
	const intro1Ref = useAnimate(styles["animate-unreal-intro"], false);
	const intro2Ref = useAnimate(styles["animate-unreal-intro"], false);
	return (
		<section>
			<div
				className={`custom-container ${styles["unreal-exploration-box"]}`}>
				<div className="container">
					<SectionHeader
						textTheme="light"
						titleText="Experience a Moonquake"
						subtitleText=""
					/>
					<div
						className={`text-light ${styles["unreal-explore-container"]}`}>
						<div
							ref={intro1Ref}
							className={styles["unreal-explore-intro-1"]}>
							<p className="lead">
								Explore the moon's surface with Unreal Engine 5
								and feel the thrill of a moonquake beneath your
								feet. Experience the lunar landscape's stark
								beauty and witness geological forces in action.
								Discover the moon's hidden secrets as you
								traverse its rugged terrain.
							</p>
						</div>
						<hr />
						<video
							// src={neural}
							width="100%"
							autoPlay
							muted
							loop
							playsInline
							controls>
							Your browser does not support the video tag.
						</video>
						{/* <div
							className="
						ratio ratio-16x9
						">
							<iframe
								width="100%"
								src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
								title="YouTube Video"
								allowFullScreen
							/>
						</div> */}
					</div>
				</div>
			</div>
			<div
				className={`custom-container light-background ${styles["unreal-exploration-box"]}`}>
				<div className="container">
					<SectionHeader
						textTheme="dark"
						titleText="Trek across the Moon's Surface"
						subtitleText=""
					/>
					<div
						className={`text-dark ${styles["unreal-explore-container"]}`}>
						<div
							ref={intro2Ref}
							className={styles["unreal-explore-intro-2"]}>
							<p className="lead">
								Step into the extraordinary and delve into the
								moon's enigmatic beauty. As you wander the lunar
								expanse, embrace the awe of its vastness and
								exlpore its mysteries. Begin a new odyssey as
								you immerse yourself in a captivating experience
								that transports you to the wonders of Earth's
								celestial neighbor.
							</p>
						</div>
						<hr />
						{/* <video width="100%" height="100%" controls>
							<source src="" type="video/mp4" />
						</video> */}
						<video
							// src={neural}
							width="100%"
							autoPlay
							muted
							loop
							playsInline
							controls>
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UnrealEngineExploration;
