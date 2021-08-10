import Image from "next/image";

const SmallCard = ({ img, location, distance }) => {
	return (
		<div className='flex group m-2 mt-5 space-x-4 hover:bg-gray-100 rounded-xl cursor-pointer hover:scale-105 transition transform duration-200 ease-out'>
			<div>
				<Image
					className='rounded-lg'
					src={img}
					height={100}
					width={100}
					alt={location}
				/>
			</div>

			<div className='flex flex-col justify-center '>
				<h2>{location}</h2>
				<h3 className='text-gray-500'>{distance}</h3>
			</div>
		</div>
	);
};

export default SmallCard;
