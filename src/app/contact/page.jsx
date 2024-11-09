"use client";
import { useState } from "react";
import styles from "../styles/contact.module.scss";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useRouter } from "next/navigation";

function Page() {
	const router = useRouter();
	const variant = {
		initial: { y: 100, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((FormData) => ({ ...FormData, [name]: value }));
	};
	function handleSubmit(e) {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_bass4eg",
				"template_pdeqopt",
				e.target,
				"pFfsLVBcO8sEsV84y"
			)
			.then(
				(result) => {
					alert("message email sent successfully!");
					router.push("/");
				},
				(error) => {
					alert("Failed to send message.");
				}
			);
	}

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
					GET IN TOUCH,
				</motion.h1>
				<motion.h1
					variants={variant}
					initial="initial"
					animate="animate"
					transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
					className={styles.headingText}
				>
					{"LET'S WORK"}
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
					Feel free to reach out with any questions or inquiries.
				</motion.p>
				<motion.form
					onSubmit={handleSubmit}
					variants={variant}
					initial="initial"
					animate="animate"
					transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.25 }}
					className={styles.form}
					action=""
				>
					<div className={styles.formItem}>
						<label className={styles.formLabel} htmlFor="name">
							Your Name:
						</label>
						<input
							value={formData.name}
							onChange={handleChange}
							className={styles.formInput}
							name="name"
							type="text"
						/>
					</div>
					<div className={styles.formItem}>
						<label className={styles.formLabel} htmlFor="Email">
							Email:
						</label>
						<input
							value={formData.email}
							onChange={handleChange}
							className={styles.formInput}
							name="email"
							type="text"
						/>
					</div>
					<div className={styles.formItem}>
						<label className={styles.formLabel} htmlFor="Message">
							How can i be of service:
						</label>
						<input
							value={formData.message}
							onChange={handleChange}
							className={styles.formInput}
							type="text"
							name="message"
						/>
					</div>
					<button className={styles.formButton}>Submit</button>
				</motion.form>
				<motion.div
					variants={variant}
					initial="initial"
					animate="animate"
					transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
					className={styles.socials}
				>
					<p
						className={styles.socialsIcon}
						onClick={() =>
							router.push(
								"https://www.instagram.com/kxvich?igsh=Znc1eHdrNjRnNGJh&utm_source=qr"
							)
						}
					>
						Instagram
					</p>
					<p
						className={styles.socialsIcon}
						onClick={() =>
							router.push(
								"https://www.facebook.com/stanley.emmanuel.526?mibextid=LQQJ4d"
							)
						}
					>
						Facebook
					</p>
					<p
						className={styles.socialsIcon}
						onClick={() => router.push("https://x.com/kxvichc?s=21")}
					>
						X
					</p>
					<p
						className={styles.socialsIcon}
						onClick={() => router.push("https://github.com/kxvich")}
					>
						Github
					</p>
				</motion.div>
			</div>
		</div>
	);
}

export default Page;
