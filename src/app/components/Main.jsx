"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "../styles/main.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Main() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedId, setSelectedId] = useState(null);
	const router = useRouter();

	const works = [
		{
			name: "Laundex",
			id: 1,
			description:
				"I designed and developed this project with a strong focus on user experience, opting for a clean, straightforward interface that prioritizes simplicity and speed. The goal was to create a platform where users can easily book laundry services from home, with convenient features like pickup, delivery, order tracking, and more.",
			images: ["/laundex1.png", "/laundex2.png", "/laundex3.png"],
			href: "https://laundex-bujx.vercel.app",
		},
		{
			name: "Samanja",
			id: 2,
			description:
				"This project was created for a highly creative individual passionate about capturing beautiful moments. The core focus is to showcase Samanja's work, providing a space where people can explore his past projects and easily reach out to collaborate with him.",
			images: ["/samanja1.png", "/samanja2.png", "/samanja3.png"],
			href: "https://samanja.org/",
		},
		{
			name: "Cruiters",
			id: 3,
			description:
				"This project was created to showcase a simple and visually appealing user interface for a recruitment company. It focuses on clean design and smooth animations to enhance user experience. While it demonstrates the visual layout and interactions, features such as routing, search functionality, or backend integration are not implemented.",
			images: ["/cruiters1.png", "/cruiters2.png", "/cruiters3.png"],
			href: "https://cruiters.vercel.app",
		},
		
	];
	const bodyTextVariant = {
		closed: { opacity: 0, y: 50 },
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
			y: -50,
			transition: {
				duration: 0.8,
				ease: [0.76, 0, 0.24, 1],
			},
		}),
	};
	function handleSelection(id) {
		setSelectedId(selectedId === id ? null : id);
		setIsOpen(!isOpen);
	}
	return (
		<div>
			<section className={styles.sectionWhat}>
				<motion.div
					variants={bodyTextVariant}
					initial="closed"
					whileInView="open"
					viewport={{ once: true, amount: 0.2 }}
					className={styles.sectionWhatTextBox}
				>
					<motion.h2 className={styles.sectionWhatheading}>WHAT I DO</motion.h2>
					<Image
						src={"/arrow-right-solid.svg"}
						width={"20"}
						height={"20"}
						alt="arrow-icon"
						className={styles.sectionWhatArrow}
					/>
					<p className={styles.sectionWhatParagraph}>
						I design and develop elegant websites that are fast, responsive, and
						user-friendly{" "}
					</p>
				</motion.div>
				<motion.div
					variants={bodyTextVariant}
					initial="closed"
					whileInView="open"
					viewport={{ once: true, amount: 0.2 }}
					className={styles.sectionWhatTextBox}
				>
					<h2 className={styles.sectionWhatheading}> HOW I DO IT</h2>
					<Image
						src={"/arrow-right-solid.svg"}
						width={"20"}
						height={"20"}
						alt="arrow-icon"
						className={styles.sectionWhatArrow}
					/>
					<p className={styles.sectionWhatParagraph}>
						I’m highly skilled in HTML, CSS, JavaScript, React, and Next.js,
						delivering efficient and modern web solutions.
					</p>
				</motion.div>
			</section>
			<section className={styles.sectionMyWorks}>
				<motion.h3
					variants={bodyTextVariant}
					initial="closed"
					whileInView="open"
					viewport={{ once: true, amount: 0.2 }}
					className={styles.sectionMyWorksHeading}
				>
					MY WORKS
				</motion.h3>
				<motion.ul
					variants={bodyTextVariant}
					initial="closed"
					whileInView="open"
					viewport={{ once: true, amount: 0.2 }}
					className={styles.sectionMyWorksList}
				>
					{works.map((work, i) => {
						return (
							<motion.div
								key={`c_${work.name}`}
								style={{ height: "auto", overflow: "hidden" }}
								onClick={() => handleSelection(i + 1)}
							>
								{
									<motion.li
										key={`c_${work.id}`}
										transition={{
											duration: 0.25,
											ease: "easeInOut",
										}}
										className={styles.sectionMyWorksListItem}
									>
										<h2 className={styles.sectionMyWorksListItemName}>
											{work.name}
										</h2>
										<p className={styles.sectionMyWorksListItemCategory}>
											Design & Development
										</p>
									</motion.li>
								}
								<AnimatePresence mode="wait">
									{selectedId !== null && selectedId === work.id && (
										<motion.div
											initial={{ y: "-1%", opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											exit={{ y: "-1%", opacity: 0 }}
											transition={{
												duration: 0.25,
												ease: "easeIn",
											}}
											className={styles.sectionMyWorksListItemDetails}
										>
											<p className={styles.sectionMyWorksListItemText}>
												{work.description}
											</p>
											<a
												href={work.href}
												className={styles.sectionMyWorksListItemButton}
											>
												see website
											</a>
											<div
												className={styles.sectionMyWorksListItemImageContainer}
											>
												{work.images.map((image, i) => {
													return (
														<Image
															key={i}
															alt={`${work.name}${i}`}
															src={image}
															width={410}
															height={205}
															className={styles.sectionMyWorksListItemImage}
														/>
													);
												})}
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						);
					})}
				</motion.ul>
				<motion.div
					variants={bodyTextVariant}
					initial="closed"
					whileInView="open"
					viewport={{ once: true, amount: 0.2 }}
					className={styles.sectionMyWorksButtonContainer}
				>
					<button
						onClick={() => router.push("/work")}
						className={styles.sectionMyWorksButton}
					>
						More Works
					</button>
				</motion.div>
			</section>
		</div>
	);
}

export default Main;
