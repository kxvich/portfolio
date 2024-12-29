"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "../styles/work.module.scss";
import { useState } from "react";
function Works() {
    const [isOpen, setIsOpen] = useState(false);
	const [selectedId, setSelectedId] = useState(null);
	function handleSelection(id) {
		setSelectedId(selectedId === id ? null : id);
		setIsOpen(!isOpen);
	}

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
    return (
        <div>
			<section className={styles.Works}>
				<motion.h3
					variants={bodyTextVariant}
					initial="closed"
					whileInView="open"
					viewport={{ once: true, amount: 0.2 }}
					className={styles.WorksHeading}
				>
					MY WORKS
				</motion.h3>
				<motion.ul
					variants={bodyTextVariant}
					initial="closed"
					whileInView="open"
					viewport={{ once: true, amount: 0.2 }}
					className={styles.WorksList}
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
										className={styles.WorksListItem}
									>
										<h2 className={styles.WorksListItemName}>{work.name}</h2>
										<p className={styles.WorksListItemCategory}>
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
											className={styles.WorksListItemDetails}
										>
											<p className={styles.WorksListItemText}>
												{work.description}
											</p>
											<a
												href={work.href}
												className={styles.WorksListItemButton}
											>
												see website
											</a>
											<div className={styles.WorksListItemImageContainer}>
												{work.images.map((image, i) => {
													return (
														<Image
															key={i}
															alt={`${work.name}${i}`}
															src={image}
															width={410}
															height={205}
															className={styles.WorksListItemImage}
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
			</section>
		</div>
    )
}

export default Works
