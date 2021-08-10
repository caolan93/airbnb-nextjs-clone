import Image from "next/image";

const HeroImage = () => {
	return (
		<div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:[600px] 2xl:h-[700px]'>
			<Image
				src='https://links.papareact.com/0fm'
				layout='fill'
				object='cover'
			/>
			<div className='absolute top-1/2 w-full text-center'>
				<p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
				<button className='bg-white px-10 py-4 text-purple-400 shadow-md rounded-full my-3 font-bold hover:shadow-lg active:scale-105 transition duration-150'>
					I'm flexible
				</button>
			</div>
		</div>
	);
};

export default HeroImage;
