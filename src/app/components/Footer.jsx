import { motion } from "framer-motion";
import Image from "next/image";
import styles from "@/app/styles/footer.module.scss";

function Footer() {
	const bodyTextVariant = {
		closed: { opacity: 0, y: 50 },
		open: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.76, 0, 0.24, 1],
			},
		}),

		exit: (i) => ({
			opacity: 0,
			y: -50,
			transition: {
				duration: 0.8,
				ease: [0.76, 0, 0.24, 1],
			},
		}),
	};
	return (
		<div>
			<section className={styles.sectionContact}>
				<motion.div
					variants={bodyTextVariant}
					initial="closed"
					whileInView="open"
					viewport={{ once: true, amount: 0.2 }}
					className={styles.sectionContactContainer}
				>
					<div>
						<h1 className={styles.sectionContactHeading}>
							{`Contact Me, Let's work`}
						</h1>
					</div>
					<Image
						src={"/arrow-right-solid-white.svg"}
						width={"20"}
						height={"20"}
						alt="arrow-icon"
						className={styles.sectionContactArrow}
					/>
					<div className={styles.sectionContactSocialsContainer}>
						<Image
							src={"/facebook.svg"}
							height={"35"}
							width={"35"}
							alt="facebook"
							className={styles.sectionContactIcon}
						/>
						<Image
							src={"/instagram.svg"}
							height={"35"}
							width={"35"}
							alt="instagram"
							className={styles.sectionContactIcon}
						/>
						<Image
							src={"/x-twitter.svg"}
							height={"35"}
							width={"35"}
							alt="twitter"
							className={styles.sectionContactIcon}
						/>
						<Image
							src={"/linkedin.svg"}
							height={"35"}
							width={"35"}
							alt="linkedin"
							className={styles.sectionContactIcon}
						/>
					</div>
				</motion.div>
				<motion.div
					variants={bodyTextVariant}
					initial="closed"
					whileInView="open"
					viewport={{ once: true, amount: 0.2 }}
					className={styles.sectionContactEmailContainer}
				>
					<div className={styles.sectionContactEmail}>kovich112@gmail.com</div>
					<div className={styles.sectionContactEmail}>+2349138926931</div>
					<p className={styles.sectionContactCopyright}>
						&copy; copyright 2024
					</p>
				</motion.div>
			</section>
		</div>
	);
}

export default Footer;
