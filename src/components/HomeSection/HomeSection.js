import styles from "./HomeSection.module.css";
import useAnimate from "../../hooks/use-animate";

const HomeSection = () => {
	const elementRef = useAnimate(styles["animate"]);
	return (
		<div className={styles["parent-container"]}>
			<div className={styles["overlay-container"]}>
				<h1
					ref={elementRef}
					className={`display-1 text-light ${styles["title"]}`}>
					LUNAR TREK
				</h1>
			</div>
		</div>
	);
};

export default HomeSection;
