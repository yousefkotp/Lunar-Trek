import styles from "./Icon.module.css";

const Icon = (props) => {
	const { link, to, src, alt, iconClassName, linkClassName } = props;

	return link === true ? (
		<a
			href={to}
			target="_blank"
			rel="noopener noreferrer"
			className={`${styles["icon-link"]} ${linkClassName}`}>
			<img
				src={src}
				alt={alt}
				className={`${styles["white-icon"]} ${iconClassName}`}
			/>
		</a>
	) : (
		<img
			src={src}
			alt={alt}
			className={`${styles["white-icon"]} ${iconClassName}`}
		/>
	);
};

export default Icon;
