import Image from "next/image";

import { useState } from "react";

import { HeartIcon as HeartOutline } from "@heroicons/react/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/solid";

const InfoCard = ({
	img,
	location,
	title,
	description,
	price,
	star,
	total,
}) => {
	const [liked, setLiked] = useState(false);

	const handleLiked = () => {
		setLiked(!liked);
	};

	return (
		<div className='flex flex-col sm:flex-row cursor-pointer mb-1 hover:shadow-lg py-7 px-2 rounded-2xl hover:opacity-80 transition duration-200 ease-out '>
			<div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
				<Image
					className='relative rounded-2xl'
					objectFit='cover'
					src={img}
					layout='fill'
					alt={title}
				/>
			</div>
			<div className='flex flex-col flex-grow sm:pl-5'>
				<div className='flex justify-between items-center'>
					<p>{location}</p>
					{liked ? (
						<HeartSolid onClick={handleLiked} className='h-7 text-[#FE595E]' />
					) : (
						<HeartOutline onClick={handleLiked} className='h-7' />
					)}
				</div>
				<h4 className='text-xl'>{title}</h4>
				<div className='border-b w-10 pt-2' />
				<p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>

				<div>
					<p className='flex items-center'>
						<StarIcon className='h-5 text-[#FE595E]' />
						{star}
					</p>
					<div>
						<p>{price}</p>
						<p>{total}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
