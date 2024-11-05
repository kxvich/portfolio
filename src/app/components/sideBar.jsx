import styles from "../styles/sidebar.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

function SideBar({ isActive, setIsActive }) {
	const sidebarLinks = [
		{ name: "Home", href: "#" },
		{ name: "Work", href: "#" },
		{ name: "About", href: "#" },
		{ name: "Contact", href: "#" },
	];
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
	return (
		<motion.div
			initial={{ opacity: 0, x: "100%" }}
			animate={{ opacity: 1, x: "0" }}
			exit={{ opacity: 0, x: "100%" }}
			transition={{
				duration: 0.6,
				ease: [0.76, 0, 0.24, 1],
			}}
			className={styles.background}
		>
			<motion.div
				variants={textVariant}
				initial="closed"
				animate="open"
				exit="exit"
				className={styles.logo}
			>
				<h1 className={styles.logoText}> Stanley Emmanuel</h1>
			</motion.div>
			<div className={styles.closeButton}>
				<Image
					onClick={() => setIsActive(!isActive)}
					alt="close"
					src={"/xmark-solid.svg"}
					width={25}
					height={25}
				/>
			</div>
			<ul className={styles.list}>
				{sidebarLinks.map((link, i) => (
					<motion.li
						initial={{ opacity: 0, x: "50%" }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 1,
							delay: i * 0.02,
							ease: [0.76, 0, 0.24, 1],
						}}
						className={styles.listItem}
						key={`c_${i}`}
					>
						{link.name}
					</motion.li>
				))}
			</ul>
			<div className={styles.socials}>
				<h2 className={styles.socialsHeading}>Socials</h2>
				<ul className={styles.socialsList}>
					<li className={styles.socialsListItem}>Instagram</li>
					<li className={styles.socialsListItem}>Twitter</li>
					<li className={styles.socialsListItem}>Linkedin</li>
					<li className={styles.socialsListItem}>Facebook</li>
				</ul>
			</div>
		</motion.div>
	);
}

export default SideBar;
