import Head from "next/head";
import HeroImage from "../components/HeroImage";

import Header from "../components/Header";

export default function Home() {
	return (
		<div>
			<Head>
				<title>AirBnb Clone</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* Header */}
			<Header />

			{/* Banner */}
			<HeroImage />
		</div>
	);
}
