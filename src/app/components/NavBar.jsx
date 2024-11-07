"use client";
import { AnimatePresence, delay, motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/navbar.module.scss";
import { useAppContext } from "../contexts/AppContext";
import { useRouter } from "next/navigation";

function NavBar() {
	const { isActive, setIsActive, isLoading } = useAppContext();
	const router = useRouter();

	const textVariant = {
		closed: { opacity: 0, y: -50 },
		open: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.76, 0, 0.24, 1],
			},
		}),

		exit: (i) => ({
			opacity: 0,
			y: 50,
			transition: {
				duration: 0.8,
				delay: i * 0.4,
				ease: [0.76, 0, 0.24, 1],
			},
		}),
	};
	return (
		<div>
			<AnimatePresence mode="wait">
				{!isActive && !isLoading && (
					<div className={styles.navbar}>
						<div style={{ overflow: "hidden" }}>
							<motion.div
							onClick={() => router.push("/")}
								variants={textVariant}
								initial="closed"
								animate="open"
								exit="exit"
								className={styles.logo}
							>
								<Image
									className={styles.globe}
									alt="logo-image"
									src={"/globe.svg"}
									width={"20"}
									height={"20"}
									priority
								/>
								<h1 className={styles.logoText}> Stanley Emmanuel</h1>
							</motion.div>
						</div>
						<motion.ul
							variants={textVariant}
							initial="closed"
							animate="open"
							exit="exit"
							className={styles.navLinks}
						>
							<motion.div
								style={{ overflow: "hidden", position: "relative" }}
								initial="initial"
								whileHover="hovered"
							>
								<li className={styles.navLinksItem}>
									{"Work".split("").map((l, i) => {
										return (
											<motion.span
												variants={{
													initial: { y: 0 },
													hovered: { y: "-100%" },
												}}
												style={{ display: "inline-block" }}
												key={i}
												transition={{
													duration: 0.25,
													delay: 0.025 * i,
													ease: "easeInOut",
												}}
											>
												{l}
											</motion.span>
										);
									})}
								</li>
								<li
									style={{
										position: "absolute",
										top: 0,
										left: 0,
										right: 0,
									}}
									className={styles.navLinksItem}
								>
									{"Work".split("").map((l, i) => {
										return (
											<motion.span
												onClick={() => router.push("/work")}
												style={{ display: "inline-block" }}
												variants={{
													initial: { y: "100%" },
													hovered: { y: 0 },
												}}
												transition={{
													duration: 0.25,
													delay: 0.025 * i,
													ease: "easeInOut",
												}}
												key={i}
											>
												{l}
											</motion.span>
										);
									})}
								</li>
							</motion.div>
							<motion.div
								style={{ overflow: "hidden", position: "relative" }}
								initial="initial"
								whileHover="hovered"
							>
								<li className={styles.navLinksItem}>
									{"About".split("").map((l, i) => {
										return (
											<motion.span
												variants={{
													initial: { y: 0 },
													hovered: { y: "-100%" },
												}}
												style={{ display: "inline-block" }}
												key={i}
												transition={{
													duration: 0.25,
													delay: 0.025 * i,
													ease: "easeInOut",
												}}
											>
												{l}
											</motion.span>
										);
									})}
								</li>
								<li
									style={{
										position: "absolute",
										top: 0,
										left: 0,
										right: 0,
									}}
									className={styles.navLinksItem}
								>
									{"About".split("").map((l, i) => {
										return (
											<motion.span
												onClick={() => router.push("/about")}
												style={{ display: "inline-block" }}
												variants={{
													initial: { y: "100%" },
													hovered: { y: 0 },
												}}
												transition={{
													duration: 0.25,
													delay: 0.025 * i,
													ease: "easeInOut",
												}}
												key={i}
											>
												{l}
											</motion.span>
										);
									})}
								</li>
							</motion.div>
							<motion.div
								style={{ overflow: "hidden", position: "relative" }}
								initial="initial"
								whileHover="hovered"
							>
								<li className={styles.navLinksItem}>
									{"Contact".split("").map((l, i) => {
										return (
											<motion.span
												variants={{
													initial: { y: 0 },
													hovered: { y: "-100%" },
												}}
												style={{ display: "inline-block" }}
												key={i}
												transition={{
													duration: 0.25,
													delay: 0.025 * i,
													ease: "easeInOut",
												}}
											>
												{l}
											</motion.span>
										);
									})}
								</li>
								<li
									style={{
										position: "absolute",
										top: 0,
										left: 0,
										right: 0,
									}}
									className={styles.navLinksItem}
								>
									{"Contact".split("").map((l, i) => {
										return (
											<motion.span
												onClick={() => router.push("/contact")}
												style={{ display: "inline-block" }}
												variants={{
													initial: { y: "100%" },
													hovered: { y: 0 },
												}}
												transition={{
													duration: 0.25,
													delay: 0.025 * i,
													ease: "easeInOut",
												}}
												key={i}
											>
												{l}
											</motion.span>
										);
									})}
								</li>
							</motion.div>
						</motion.ul>
						<motion.button
							variants={textVariant}
							initial="closed"
							animate="open"
							exit="exit"
							onClick={() => setIsActive(!isActive)}
							className={styles.navbarButton}
						>
							MENU
						</motion.button>
					</div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default NavBar;
