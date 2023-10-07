import styles from "./Footer.module.css";
import githubIcon from "../../assets/icons/github.svg";
import useAnimate from "../../hooks/use-animate";
import Icon from "../Miscellaneous/Icon";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const elementRef = useAnimate(styles["animate"], false);

	return (
		<footer className={`${styles["footer"]} py-5`}>
			<div
				ref={elementRef}
				className={`container text-light ${styles["footer-container"]}`}>
				<p className={styles["copyright"]}>
					Background image by{" "}
					<a
						href="https://twitter.com/AJamesMcCarthy"
						target="_blank"
						rel="noreferrer">
						Andrew McCarthy
					</a>
					.
				</p>
				<p className={styles["copyright"]}>
					Surface image of 3D moon globe from{" "}
					<a
						href="https://www.solarsystemscope.com/textures/"
						target="_blank"
						rel="noreferrer">
						Solar System Scope
					</a>
					.
				</p>
				<p className={styles["copyright"]}>
					Topographic image of 3D moon globe from{" "}
					<a
						href="https://astrogeology.usgs.gov/search/map/Moon/LMMP/LOLA-derived/Lunar_LRO_LOLA_ClrShade_Global_64ppd_BlueSteel"
						target="_blank"
						rel="noreferrer">
						Moon LRO LOLA Shaded Relief
					</a>{" "}
					by ESA.
				</p>
				<p className={styles["copyright"]}>
					Virtual Experience developed with{" "}
					<a
						href="https://www.unrealengine.com/en-US/"
						target="_blank"
						rel="noreferrer">
						Unreal Engine 5
					</a>
				</p>
				<p className={styles["copyright"]}>
					Developed with{" "}
					<a
						href="https://reactjs.org/"
						target="_blank"
						rel="noreferrer">
						React.js
					</a>
					.
				</p>
				<p className={styles["source-code-link"]}>
					<Icon
						link={true}
						to="https://www.github.com/MohammadHelaly/lunar-trek"
						src={githubIcon}
						alt="GitHub"
					/>
				</p>
				<hr />
				<p className={styles["copyright"]}>&copy; {currentYear}</p>
			</div>
		</footer>
	);
};

export default Footer;
