import styles from "./SectionHeader.module.css";
import useAnimate from "../../hooks/use-animate";

const SectionHeader = (props) => {
	const titleRef = useAnimate(styles["animate"], false);
	const subtitleRef = useAnimate(styles["animate"], false);
	const { titleText, subtitleText, textTheme } = props;

	return (
		<div className={styles["header-container"]}>
			<h2
				ref={titleRef}
				className={
					textTheme === "light"
						? `${styles["light-title-text"]} display-6`
						: `${styles["dark-title-text"]} display-6`
				}>
				{titleText}
			</h2>
			<p
				ref={subtitleRef}
				className={
					textTheme === "light"
						? `${styles["light-subtitle-text"]} lead`
						: `${styles["dark-subtitle-text"]} lead`
				}>
				{subtitleText}
			</p>
		</div>
	);
};

export default SectionHeader;
