import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import {
	SearchIcon,
	GlobeAltIcon,
	MenuIcon,
	UserCircleIcon,
	UsersIcon,
} from "@heroicons/react/solid";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRangePicker } from "react-date-range";

const Header = () => {
	const router = useRouter();
	const [searchInput, setSearchInput] = useState("");
	const [numberOfGuests, setNumberOfGuests] = useState(1);
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const handleSelect = (ranges) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	const selectionRange = {
		startDate,
		endDate,
		key: "selection",
	};

	const handleSearch = () => {
		router.push({
			pathname: "/search",
			query: {
				location: searchInput,
				startDate: startDate.toISOString(),
				endDate: startDate.toISOString(),
				numberOfGuests,
			},
		});
	};

	return (
		<header className='sticky top-0 z-50 p-5 grid grid-cols-3 bg-white shadow-md md:p-10'>
			{/* Left */}
			<div className='relative flex items-center h-10 md:h-12 cursor-pointer my-auto'>
				<Image
					onClick={() => {
						router.push("/");
					}}
					src='https://links.papareact.com/qd3'
					layout='fill'
					objectFit='contain'
					objectPosition='left'
					alt='AirBnb logo'
				/>
			</div>

			{/* Center */}
			<div className='flex items-center md:border-2 rounded-full border-gray-300 py-2 justify-between md:shadow-sm '>
				<input
					className='pl-5 bg-transparent outline-none flex-grow text-s text-gray-600 placeholder-gray-400'
					type='text'
					value={searchInput}
					placeholder='Start your search'
					onChange={(e) => setSearchInput(e.target.value)}
				/>
				<SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
			</div>

			{/* Right */}
			<div className='flex justify-end items-center space-x-4 text-gray-500 cursor-pointer'>
				<p className='hidden md:inline-flex'>Become a host</p>
				<GlobeAltIcon className='h-6' />

				<div className='flex rounded-full border-2 p-2'>
					<MenuIcon className='h-6' />
					<UsersIcon className='h-6' />
				</div>
			</div>
			{searchInput && (
				<div className='flex flex-col col-span-3 mx-auto mt-3'>
					<DateRangePicker
						ranges={[selectionRange]}
						minDate={new Date()}
						rangeColors={["#FD5B61"]}
						onChange={handleSelect}
					/>
					<div className='flex justify-between items-center'>
						<h2 className='text-2xl flex-grow font-semibold'>
							Number of Guests
						</h2>
						<UsersIcon className='h-6' />
						<input
							className=' w-12 pl-2 outline-none text-[#FD5B61]'
							type='number'
							value={numberOfGuests}
							min={1}
							onChange={(e) => setNumberOfGuests(e.target.value)}
						/>
					</div>
					<div className='flex justify-center items-center space-x-1'>
						<button
							className='mt-5 text-gray-400 border hover:bg-gray-300 hover:text-white transition duration-100 ease-in-out h-12 w-[150px] rounded-lg'
							onClick={() => setSearchInput("")}>
							Cancel
						</button>
						<button
							className='mt-5 text-[#FD5B61] border border-[#FD5B61] hover:bg-[#fd5b61] hover:text-white transition duration-100 ease-in-out h-12 w-[150px] rounded-lg'
							onClick={handleSearch}>
							Search
						</button>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
