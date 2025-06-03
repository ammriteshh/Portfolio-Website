import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
	title: "Amritesh Singh | Portofolio",

	description:
		"My name is Amritesh Singh, I'm a web developer and I'm passionate about it. I'm currently studying at Lovely Professional University.",

	author: "Amritesh Singh",
	siteUrl: "https://ammriteshh.vercel.app/",
	applicationName: "Amritesh Singh",

	keywords: [
		"amritesh",
		"ammriteshh",
		"amritesh singh",
		"singh",
	],

	openGraph: {
		type: "website",
		url: "https://ammriteshh.vercel.app/",
		title: "Amritesh Singh | Portofolio",
		site_name: "Amritesh Singh | Portofolio",
		description: "My name is Amritesh Singh, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Amritesh Singh Portofolio",
			},
		],
		site_name: "Amritesh Singh | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}