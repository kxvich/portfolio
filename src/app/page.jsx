"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { AnimatePresence } from "framer-motion";
import Intro from "./components/intro";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useAppContext } from "./contexts/AppContext";

export default function Page() {
	const {isLoading, setIsLoading} = useAppContext()
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
	}, [setIsLoading]);
	return (
		<>
			<AnimatePresence mode="wait">
				{isLoading ? (
					<Intro />
				) : (
					<>
						<Header />
						<Main />
						<Footer />
					</>
				)}
			</AnimatePresence>
		</>
	);
}
