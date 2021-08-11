import Footer from "../components/Footer";
import Header from "../components/Header";

const Search = () => {
	return (
		<div>
			<Header />

			<main className='flex mt-10 '>
				<section>
					<p>300+ stays for 5 number of guests</p>

					<h1 className='text-3xl font-semibold mt-2 mb-6'>
						Stays in New York
					</h1>

					<div className='hidden lg:inline-flex space-x-2 mb-5'>
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
