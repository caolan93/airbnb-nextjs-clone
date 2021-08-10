import Image from "next/image";

import {
	SearchIcon,
	GlobeAltIcon,
	MenuIcon,
	UserCircleIcon,
	UsersIcon,
} from "@heroicons/react/solid";

const Header = () => {
	return (
		<header className='sticky top-0 z-50 p-5 grid grid-cols-3 bg-white shadow-md md:p-10'>
			{/* Left */}
			<div className='relative flex items-center h-10 md:h-12 cursor-pointer my-auto'>
				<Image
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
					placeholder='Start your search'
				/>
				<SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
			</div>

			{/* Right */}
			<div>
				<p>Become a host</p>
			</div>
		</header>
	);
};

export default Header;
