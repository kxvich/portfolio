import "./globals.scss";

export const metadata = {
	title: "Stanley Emmanuel",
	description: "Stanley Emmanuel • Creative Designer & Developer",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
