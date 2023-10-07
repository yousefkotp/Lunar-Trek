import styles from "./ContactInformation.module.css";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import gmailIcon from "../../assets/icons/gmail.jpg";
import useAnimate from "../../hooks/use-animate";
import Icon from "../Miscellaneous/Icon";

const ContactInformation = (props) => {
	const { name, photo, gmailLink, linkedinLink, githubLink } = props;
	const elementRef = useAnimate(styles["animate"], false);
	return (
		<div ref={elementRef} className={`${styles["contact-information"]}`}>
			<img
				src={photo}
				alt={name}
				className={`${styles["contact-photo"]}`}
			/>
			<h3>{name}</h3>
			<Icon
				link={true}
				to={gmailLink}
				src={gmailIcon}
				alt="Gmail"
				iconClassName={`${styles["contact-gm-icon"]}`}
			/>
			<Icon
				link={true}
				to={linkedinLink}
				src={linkedinIcon}
				alt="LinkedIn"
				iconClassName={styles["contact-icon"]}
			/>
			<Icon
				link={true}
				to={githubLink}
				src={githubIcon}
				alt="GitHub"
				iconClassName={styles["contact-icon"]}
			/>
		</div>
	);
};

export default ContactInformation;
