"use client"
import { motion } from "framer-motion";
import styles from "../styles/header.module.scss";

function Header() {
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
			</div>
		</div>
	);
}

export default Header;
