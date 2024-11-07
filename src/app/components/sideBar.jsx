"use client";

import styles from "../styles/sidebar.module.scss";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useAppContext } from "../contexts/AppContext";
import { useRouter } from "next/navigation";

function SideBar() {
	const { isActive, setIsActive } = useAppContext();
	const sidebarLinks = [
		{ name: "Home", href: "/" },
		{ name: "Work", href: "/work" },
		{ name: "About", href: "/about" },
		{ name: "Contact", href: "/contact" },
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
	const router = useRouter();
	return (
		<AnimatePresence mode="wait">
			{isActive && (
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
								onClick={() => {
									router.push(link.href);
									setIsActive(!isActive);
								}}
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
			)}
		</AnimatePresence>
	);
}

export default SideBar;
