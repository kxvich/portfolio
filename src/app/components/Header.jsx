import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/header.module.scss";

function Header({ isActive, setIsActive }) {
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
			y: 100,
			transition: {
				duration: 0.8,
				delay: i * 0.4,
				ease: [0.76, 0, 0.24, 1],
			},
		}),
	};
	const itemVariant = {
		hidden: { opacity: 0, y: 20 },
		open: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};
	const textVariant2 = {
		closed: { opacity: 0, y: 100 },
		open: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				delay: i * 0.4,
				ease: [0.76, 0, 0.24, 1],
			},
		}),

		exit: (i) => ({
			opacity: 0,
			y: 100,
			transition: {
				duration: 0.8,
				delay: i * 0.4,
				ease: [0.76, 0, 0.24, 1],
			},
		}),
	};
	const getChar = (title) => {
		let chars = [];
		title.split("").forEach((char, index) => {
			chars.push(
				<motion.span
					custom={index * 0.02}
					variants={textVariant2}
					initial="closed"
					animate="open"
					exit="exit"
					key={`c_${index}`}
				>
					{char}
				</motion.span>
			);
		});
		return chars;
	};
	return (
		<div className={styles.header}>
			<div className={styles.navbar}>
				<div style={{ overflow: "hidden" }}>
					<motion.div
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
			<div className={styles.textBox}>
				<div style={{ overflow: "hidden", paddingTop: "-2rem" }}>
					<motion.h1
						variants={itemVariant}
						initial="hidden"
						animate="open"
						className={styles.headingText}
					>
						{getChar("Stanley Emmanuel")}
					</motion.h1>
				</div>
				<div style={{ overflow: "hidden" }}>
					<motion.h1
						variants={itemVariant}
						initial="hidden"
						animate="open"
						className={styles.headingText}
					>
						{getChar("Front End Developer")}
					</motion.h1>
				</div>
				<div style={{ overflow: "hidden" }}>
					<motion.h1
						variants={itemVariant}
						initial="hidden"
						animate="open"
						className={styles.headingText}
					>
						{getChar("Based In")}
					</motion.h1>
				</div>
				<div style={{ overflow: "hidden" }}>
					<motion.h1
						variants={itemVariant}
						initial="hidden"
						animate="open"
						className={styles.headingText}
					>
						{getChar("Lagos Nigeria")}
					</motion.h1>
				</div>
				{/* <div style={{ overflow: "hidden" }}>
					<motion.h1
						variants={itemVariant}
						initial="hidden"
						animate="open"
						className={styles.headingText}
					>
						{getChar("•Portfolio 2024•")}
					</motion.h1>
				</div> */}
			</div>
		</div>
	);
}

export default Header;
