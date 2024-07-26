import React from "react";
import styles from "./Tooltip.module.css";

const Tooltip = (props) => {
	const { active, payload, label } = props;

	if (active && payload && payload.length) {
		return (
			<div className={styles.tooltip}>
				<div>
					<p className={`${styles.label}`}>{label}</p>
				</div>
				<div className={styles.body}>
					{payload.map((entry, index) => (
						<p key={index} className={styles.value}>
							{`${entry.name}s: ${entry.value}`}
						</p>
					))}
				</div>
			</div>
		);
	}

	return null;
};

export default Tooltip;
