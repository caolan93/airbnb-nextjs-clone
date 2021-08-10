import Head from "next/head";
import HeroImage from "../components/HeroImage";

import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";

export default function Home({ exploreData, cardsData }) {
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

			<main className='max-w-7xl mx-auto px-8 sm:px-16'>
				<section>
					<h2 className='text-4xl font-semibold pb-5 pt-6'>Explore Nearby</h2>
				</section>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
					{exploreData.map((item) => (
						<SmallCard
							key={exploreData.indexOf(item)}
							img={item.img}
							distance={item.distance}
							location={item.location}
						/>
					))}
				</div>
				<section>
					<h2 className='text-4-xl font-semibold py-8'>Live Anywhere</h2>

					<div className='flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -ml-3'>
						{cardsData.map((item) => (
							<MediumCard
								key={cardsData.indexOf(item)}
								img={item.img}
								title={item.title}
							/>
						))}
					</div>
				</section>
				<LargeCard
					img='https://links.papareact.com/4cj'
					title='The Greatest Outdoors'
					description='Wishlists curated by Airbnb'
					buttonText='Get Inspired'
				/>
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const exploreData = await fetch("https://links.papareact.com/pyp").then(
		(res) => res.json()
	);

	const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
		res.json()
	);

	return {
		props: {
			exploreData,
			cardsData,
		},
	};
}
