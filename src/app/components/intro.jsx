"use client";

import styles from "@/app/styles/intro.module.scss";
import {motion } from "framer-motion";

function Intro() {
	const dropdownVariants = {
		closed: { opacity: 0, height: 0, overflow: "hidden" },
		open: {
			opacity: 1,
			height: "100vh",
			transition: {
				duration: 0.7,
				ease: [0.25, 0.1, 0.25, 1],
			},
		},
		exit: {
			opacity: 0,
			height: 0,
			transition: {
				duration: 0.4,
				ease: "easeOut",
			},
		},
	};
	const textVariant = {
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
	const borderVariant = {
		closed: { scaleX: 0 },
		open: {
			scaleX: 1,
			transition: {
				duration: 0.6,
				delay: 0.2,

				ease: "easeOut",
			},
		},
		exit: {
			scaleX: 0,
			transition: {
				duration: 0.6,
				delay: 0.2,

				ease: "easeOut",
			},
		},
	};
	const getChar = (title) => {
		let chars = [];
		title.split("").forEach((char, index) => {
			chars.push(
				<motion.span
					custom={index * 0.02}
					variants={textVariant}
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
		<motion.div
			variants={dropdownVariants}
			initial="closed"
			animate="open"
			exit="exit"
			className={styles.background}
		>
			<motion.div
				variants={borderVariant}
				initial="closed"
				animate="open"
				exit="exit"
				style={{ overflow: "hidden" }}
			>
				<p className={styles.text}>{getChar("Welcome To My Creative Hub.")}</p>
			</motion.div>
		</motion.div>
	);
}

export default Intro;
