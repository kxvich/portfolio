"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { AnimatePresence, motion } from "framer-motion";
import Intro from "./components/intro";
import SideBar from "./components/sideBar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


export default function Page() {
	const [isLoading, setIsLoading] = useState(false);
	const [isActive, setIsActive] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 3000);

		const lenis = new Lenis();
		let requestId;

		function raf(time) {
			lenis.raf(time);
			requestId = requestAnimationFrame(raf);
		}

		requestId = requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
			clearTimeout(timer);
			cancelAnimationFrame(requestId);
		};
	}, []);
	return (
		<>
			<AnimatePresence mode="wait">
				{isLoading ? (
					<Intro />
				) : (
					<>
						<AnimatePresence>
							{isActive && (
								<SideBar isActive={isActive} setIsActive={setIsActive} />
							)}
						</AnimatePresence>
						<Header isActive={isActive} setIsActive={setIsActive} />
						<Main />
						<Footer />
					</>
				)}
			</AnimatePresence>
		</>
	);
}
