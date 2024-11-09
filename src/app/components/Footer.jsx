"use client";

import { motion } from "framer-motion";
import styles from "@/app/styles/footer.module.scss";
import Icon from "./Icon";

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

	const socialsIcon = [
		{
			src: "/facebook.svg",
			height: "35",
			width: "35",
			alt: "facebook icon",
			className: styles.sectionContactIcon,
			clickUrl: "https://www.facebook.com/stanley.emmanuel.526?mibextid=LQQJ4d",
		},
		{
			src: "/instagram.svg",
			height: "35",
			width: "35",
			alt: "instagram icon",
			className: styles.sectionContactIcon,
			clickUrl:
				"https://www.instagram.com/kxvich?igsh=Znc1eHdrNjRnNGJh&utm_source=qr",
		},
		{
			src: "/x-twitter.svg",
			height: "35",
			width: "35",
			alt: "twitter icon",
			className: styles.sectionContactIcon,
			clickUrl: "https://x.com/kxvichc?s=21",
		},
		{
			src: "/github-brands-solid.svg",
			height: "35",
			width: "35",
			alt: "github icon",
			className: styles.sectionContactIcon,
			clickUrl: "https://github.com/kxvich",
		},
	];
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
					<Icon
						src="/arrow-right-solid-white.svg"
						width="20"
						height="20"
						alt="arrow-icon"
						className={styles.sectionContactArrow}
					/>

					<div className={styles.sectionContactSocialsContainer}>
						{socialsIcon.map((icon, i) => (
							<Icon key={`k_${i}`} {...icon} />
						))}
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
