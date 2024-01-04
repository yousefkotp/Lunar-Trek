import { motion } from "framer-motion";

const AnimatedPage = (props) => {
	const pageVariants = {
		initial: {
			opacity: 0,
		},
		in: {
			opacity: 1,
		},
		out: {
			opacity: 0,
		},
	};

	const pageTransition =
		// window.innerWidth > 768
		// 	?
		{
			type: "tween",
			ease: "anticipate",
			duration: 1,
		};
	// : {
	// 		duration: 1.5,
	//   };
	return (
		<motion.div
			variants={pageVariants}
			transition={pageTransition}
			initial="initial"
			animate="in"
			exit="out">
			{props.children}
		</motion.div>
	);
};

export default AnimatedPage;
