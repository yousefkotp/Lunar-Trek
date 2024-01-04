import styles from "./ContactInformation.module.css";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Gmail } from "../../assets/icons/gmail.svg";
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
			<div className={`${styles["contact-information-content"]}`}>
				<h3>
					{name.split(" ")[0]}
					<br />
					{name.split(" ")[1]}
				</h3>
				<div className={`${styles["social-links"]}`}>
					<Icon link={true} to={gmailLink}>
						<Gmail
							fill="white"
							className={`${styles["contact-icon"]} ${styles["contact-gm-icon"]}`}
						/>
					</Icon>
					<Icon link={true} to={linkedinLink}>
						<Linkedin className={`${styles["contact-icon"]}`} />
					</Icon>
					<Icon link={true} to={githubLink}>
						<Github className={`${styles["contact-icon"]}`} />
					</Icon>
				</div>
			</div>
		</div>
	);
};

export default ContactInformation;
