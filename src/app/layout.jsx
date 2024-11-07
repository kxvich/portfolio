import { AppProvider } from "./contexts/AppContext";
import NavBar from "./components/NavBar";
import "./globals.scss";
import SideBar from "./components/sideBar";

export const metadata = {
	title: "Stanley Emmanuel",
	description: "Stanley Emmanuel • Creative Designer & Developer",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<AppProvider>
					<SideBar />
					<NavBar />
					{children}
				</AppProvider>
			</body>
		</html>
	);
}
