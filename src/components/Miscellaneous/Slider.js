import { useState, useEffect } from "react";

const Slider = (props) => {
	const { scrollValue, originalSliderClassName, newSliderClassName } = props;
	const [addNewSliderClass, setAddNewSliderClass] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > scrollValue) {
				setAddNewSliderClass(true);
			} else {
				setAddNewSliderClass(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const sliderClassName = `${originalSliderClassName} ${
		addNewSliderClass ? newSliderClassName : ""
	}`;

	return <div className={sliderClassName} />;
};

export default Slider;
