import { useState, useEffect, useContext } from "react";
import styles from "./NavBar.module.css";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
	const [scrolled, setScrolled] = useState(false);
	const currentPath = useLocation().pathname;

	const handleScroll = () => {
		if (window.scrollY > 100) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`${
				styles["top-nav"]
			} navbar navbar-expand-lg fixed-top navbar-dark ${
				scrolled ? styles["new-top-nav"] : ""
			}`}>
			<div className="container topnav-container">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto text-center">
						{currentPath === "/" ? (
							<>
								<li className="nav-item">
									<a
										className="nav-link custom-link text-light"
										href="#explore">
										Explore Luna
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link custom-link text-light"
										href="#about">
										About
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link custom-link text-light"
										href="#contact">
										Contact
									</a>
								</li>
							</>
						) : currentPath === "/unreal-engine-exploration" ? (
							<li className="nav-item">
								<NavLink
									className="nav-link custom-link text-light"
									to="/"
									exact>
									Back to Home
								</NavLink>
							</li>
						) : null}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
