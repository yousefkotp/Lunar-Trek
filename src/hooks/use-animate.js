import { useEffect, useRef } from "react";

const useAnimate = (animationClass, reanimate = true) => {
	const elementRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add(animationClass);
				} else {
					if (reanimate) {
						entry.target.classList.remove(animationClass);
					}
				}
			});
		});

		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => {
			if (elementRef.current) {
				observer.unobserve(elementRef.current);
			}
		};
	}, []);

	return elementRef;
};

export default useAnimate;
