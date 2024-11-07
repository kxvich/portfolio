"use client";
import styles from "../styles/about.module.scss";
import { animate, delay, motion } from "framer-motion";
function Page() {
	const variant = {
		initial: { y: 100, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};
	return (
		<div className={styles.container}>
			<div className={styles.heading} style={{ overflow: "hidden" }}>
				<motion.h1
					variants={variant}
					initial="initial"
					animate="animate"
					transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
					className={styles.headingText}
				>
					Building creative and user friendly
				</motion.h1>
				<motion.h1
					variants={variant}
					initial="initial"
					animate="animate"
					transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
					className={styles.headingText}
				>
					websites
				</motion.h1>
			</div>
			<div className={styles.textBox}>
				<motion.p
					variants={variant}
					initial="initial"
					animate="animate"
					transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
					className={styles.textBoxParagraph}
				>
					I am Stanley Emmanuel, a digital creator based in Lagos, Nigeria. With
					years of experience building diverse projects, I specialize in
					delivering stunning, user-friendly, and high-performance websites. I
					am passionate about designing and developing websites that captivate
					users with creativity, clarity, and smooth functionality.
				</motion.p>
				<div className={styles.cardContainer}>
					<motion.div
						variants={variant}
						initial="initial"
						animate="animate"
						transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.25 }}
						className={styles.card}
					>
						<h2>Design</h2>I focus on visually appealing designs with intuitive
						navigation, allowing users to achieve their goals easily. My work
						emphasizes smooth transitions and animations, enhancing the
						experience and making interactions enjoyable and seamless.
					</motion.div>
					<motion.div
						variants={variant}
						initial="initial"
						animate="animate"
						transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.25 }}
						className={styles.card}
					>
						<h2>Development</h2>
						My tech stack includes HTML, CSS (Sass), and React, with Next.js for
						development. I utilize frameworks and tools like Styled-Components,
						Tailwind CSS, and CSS Modules for styling, and Framer Motion for
						animations.
					</motion.div>
					<motion.div
						variants={variant}
						initial="initial"
						animate="animate"
						transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.25 }}
						className={styles.card}
					>
						<h2>Performance</h2>A key focus in my projects is performance. I
						apply industry-standard practices to ensure every project is
						optimized for speed and smooth functionality, providing the best
						possible user experience.
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default Page;
