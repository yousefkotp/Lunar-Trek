import styles from "./ConstactSection.module.css";
import SectionHeader from "../Miscellaneous/SectionHeader";
import ContactInformation from "./ContactInformation";
import useAnimate from "../../hooks/use-animate";
import contactData from "../../assets/data/contactData";

const ContactSection = () => {
	const paragraphRef = useAnimate(styles["animate"], false);

	return (
		<section id="contact" className="light-section">
			<div className="custom-container light-background">
				<div className="container">
					<SectionHeader
						titleText="Contact Us"
						subtitleText="Get in touch with the team behind Lunar Trek."
					/>
					<div className={`${styles["contact-container"]}`}>
						<div>
							<p
								ref={paragraphRef}
								className={`lead ${styles["contact-paragraph"]}`}>
								We are a group of passionate computer
								engineering students from Alexandria University
								who are fascinated by space exploration. We
								developed Lunar Trek to participate in NASA's
								International Space Apps Challenge. Our goal is
								to contribute our skills and knowledge while
								inspiring others' passion for the cosmos.
							</p>
						</div>
						<hr />

						<div className={`${styles["contacts"]}`}>
							{contactData.map((contact, index) => {
								return (
									<ContactInformation
										key={"CI - " + index}
										name={contact.name}
										photo={contact.photo}
										gmailLink={contact.gmailLink}
										linkedinLink={contact.linkedinLink}
										githubLink={contact.githubLink}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
