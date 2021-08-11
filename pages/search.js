import Footer from "../components/Footer";
import Header from "../components/Header";

import { useRouter } from "next/router";

import { format } from "date-fns";

const Search = () => {
	const router = useRouter();

	const { location, startDate, endDate, numberOfGuests } = router.query;

	console.log(`this is ${startDate}`);
	console.log(`this is ${endDate}`);

	const formatStartDate = format(new Date(startDate), "dd/MMMM/yy");

	console.log(`this is ${formatStartDate}`);
	// const formatEndDate = format(new Date(endDate), "dd MMMM yy");

	// const range = `${formatStartDate} to ${formatEndDate}`;

	return (
		<div>
			<Header />

			<main className='flex mt-10 '>
				<section className='flex-grow pt-14 px-6'>
					<p>{/* 300+ stays from {range} for {numberOfGuests} guests */}</p>

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
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Search;
