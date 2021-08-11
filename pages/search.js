import Footer from "../components/Footer";
import Header from "../components/Header";

import { useRouter } from "next/router";

import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

const Search = ({ searchResults }) => {
	const router = useRouter();

	const { location, startDate, endDate, numberOfGuests } = router.query;

	const formatStartDate = format(new Date(startDate), "dd MMMM yy");

	const formatEndDate = format(new Date(endDate), "dd MMMM yy");

	const range = `${formatStartDate} - ${formatEndDate}`;

	return (
		<div>
			<Header
				placeholder={`${location} | ${range} | ${numberOfGuests} ${
					numberOfGuests > 1 ? "people" : "person"
				}`}
			/>

			<main className='flex mt-10 '>
				<section className='flex-grow pt-14 px-6'>
					<p>
						300+ stays {range} for {numberOfGuests} guests
					</p>

					<h1 className='text-3xl font-semibold mt-2 mb-6'>
						Stays in {location}
					</h1>

					<div className='hidden lg:inline-flex space-x-3 text-gray-800 mb-5 whitespace-nowrap'>
						<p className='button'>Cancellation flexibilty</p>
						<p className='button'>Type of place</p>
						<p className='button'>Price</p>
						<p className='button'>Room and Beds</p>
						<p className='button'>More filters</p>
					</div>

					<div className='flex flex-col'>
						{searchResults.map((item) => (
							<InfoCard
								key={searchResults.indexOf(item)}
								img={item.img}
								title={item.title}
								description={item.description}
								location={item.location}
								total={item.total}
								price={item.price}
								star={item.star}
							/>
						))}
					</div>
				</section>
				<section className='inline-flex xl:min-width-[600px]'>
					<Map />
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default Search;

export async function getServerSideProps() {
	const searchResults = await fetch("https://links.papareact.com/isz").then(
		(res) => res.json()
	);

	return {
		props: {
			searchResults,
		},
	};
}
