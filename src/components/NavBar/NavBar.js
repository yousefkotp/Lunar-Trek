import { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/slices/dataSlice";

const NavBar = () => {
	const [scrolled, setScrolled] = useState(false);
	const currentPath = useLocation().pathname;
	const dispatch = useDispatch();
	const { reset, setSelectedQuake, setViewTimeSeriesData } = dataActions;

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

	const resetContextHandler = () => {
		dispatch(reset());
	};

	const viewTimeSeriesDataHandler = () => {
		dispatch(setSelectedQuake(null));
		dispatch(
			setViewTimeSeriesData({
				on: true,
				shallowMoonquakes: true,
				deepMoonquakes: true,
				meteoriteImpacts: true,
				artificialImpacts: true,
			})
		);
	};

	const freeExplorationHandler = () => {
		dispatch(setSelectedQuake(null));
		dispatch(
			setViewTimeSeriesData({
				on: false,
				shallowMoonquakes: false,
				deepMoonquakes: false,
				meteoriteImpacts: false,
				artificialImpacts: false,
			})
		);
	};

	return (
		<nav
			className={`${
				styles["top-nav"]
			} navbar navbar-expand-lg fixed-top navbar-dark ${
				scrolled && !currentPath.includes("/globe-exploration")
					? styles["new-top-nav"]
					: currentPath.includes("/globe-exploration")
					? styles["blurred-top-nav"]
					: ""
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
						{currentPath === "/lunar-trek/globe-exploration" ? (
							<>
								<li className="nav-item">
									<NavLink
										className="nav-link custom-link text-light"
										to="/lunar-trek/globe-exploration"
										onClick={freeExplorationHandler}
										exact="true">
										Free Exploration
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink
										className="nav-link custom-link text-light"
										to="/lunar-trek/globe-exploration"
										onClick={viewTimeSeriesDataHandler}>
										Time Series Analysis
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink
										className="nav-link custom-link text-light"
										onClick={resetContextHandler}
										to="/lunar-trek">
										Back to Home
									</NavLink>
								</li>
							</>
						) : currentPath ===
						  "/lunar-trek/unreal-engine-exploration" ? (
							<li className="nav-item">
								<NavLink
									className="nav-link custom-link text-light"
									to="/lunar-trek"
									onClick={resetContextHandler}>
									Back to Home
								</NavLink>
							</li>
						) : (
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
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
