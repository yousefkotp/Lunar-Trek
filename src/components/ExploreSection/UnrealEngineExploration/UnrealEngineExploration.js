import SectionHeader from "../../Miscellaneous/SectionHeader";
import styles from "./UnrealEngineExploration.module.css";
import useAnimate from "../../../hooks/use-animate";
import { Link } from "react-router-dom";

const UnrealEngineExploration = () => {
	const intro1Ref = useAnimate(styles["animate-unreal-intro"], false);
	const intro2Ref = useAnimate(styles["animate-unreal-intro"], false);
	const video1Ref = useAnimate(
		styles["animate-unreal-video-container"],
		false
	);
	const video2Ref = useAnimate(
		styles["animate-unreal-video-container"],
		false
	);
	const linkRef = useAnimate(styles["animate-unreal-link"], false);
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
						<div
							ref={video1Ref}
							className={styles["unreal-video-container"]}>
							<video
								width="100%"
								height="100%"
								className={styles["unreal-video"]}
								title="Lunar Trek - First Person View"
								autoPlay
								muted
								loop
								playsInline
								controls>
								<source
									src="/assets/videos/Lunar Trek - First Person View.mp4"
									type="video/mp4"
								/>
							</video>
						</div>
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
						<div
							ref={video2Ref}
							className={styles["unreal-video-container"]}>
							<video
								width="100%"
								height="100%"
								className={styles["unreal-video"]}
								title="Lunar Trek - Third Person View"
								autoPlay
								muted
								loop
								playsInline
								controls>
								<source
									src="/assets/videos/Lunar Trek - Third Person View.mp4"
									type="video/mp4"
								/>
							</video>
						</div>
						<hr />
						<Link
							ref={linkRef}
							className={`${styles["unreal-link"]}`}
							to="https://drive.google.com/drive/folders/1RILwmJiD-WPrtRR3bltP_I1SANGxLZVE?usp=drive_link"
							target="_blank"
							rel="noreferrer">
							<h3>Download and Try It Yourself</h3>
						</Link>
						<p className={styles["disclaimer"]}>
							**Disclamer: Due to resource limitations, Lunar Trek
							Unreal Engine 5 Virtual Experience could not be
							deployed to a web server. Executable files are
							available for download at this link. Due to security
							concerns with downloading files, the above videos
							are provided as demonstrations.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UnrealEngineExploration;
