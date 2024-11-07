"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
	const [isActive, setIsActive] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<AppContext.Provider
			value={{ isActive, setIsActive, isLoading, setIsLoading }}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
