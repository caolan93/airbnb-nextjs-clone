const Footer = () => {
	return (
		<footer className='hidden sm:block bg-gray-100 p-[40px]'>
			<div className='max-w-7xl mx-auto sm:flex sm:flex-col lg:grid lg:grid-cols-4 '>
				<div className='text-xs text-gray-800'>
					<h5 className='font-bold px-[12px] mt-[12px]'>ABOUT</h5>
					<div className='grid grid-cols-3 lg:flex lg:flex-col'>
						<p className='footerInfoLink'>How Airbnb works</p>
						<p className='footerInfoLink'>Newsroom</p>
						<p className='footerInfoLink'>Investors</p>
						<p className='footerInfoLink'>Airbnb Plus</p>
						<p className='footerInfoLink'>Airbnb Luxe</p>
						<p className='footerInfoLink'>HotelTonight</p>
						<p className='footerInfoLink'>Airbnb for Work</p>
						<p className='footerInfoLink'>Made possible by Hosts</p>
						<p className='footerInfoLink'>Careers</p>
						<p className='footerInfoLink'>Founders' Letter</p>
					</div>
					<div className='mt-5 border border-b-1 lg:hidden'></div>
				</div>
				<div className='text-xs  text-gray-800'>
					<h5 className='font-bold px-[12px] mt-[12px]'>COMMUNITY</h5>
					<div className='grid grid-cols-3 lg:flex lg:flex-col'>
						<p className='footerInfoLink'>Diversity & Belonging</p>
						<p className='footerInfoLink'>Airbnb Associates</p>
						<p className='footerInfoLink'>Frontline Stays</p>
						<p className='footerInfoLink'>Guest Referrals</p>
						<p className='footerInfoLink'>Airbnb.org</p>
					</div>
					<div className='mt-5 border border-b-1 lg:hidden'></div>
				</div>
				<div className=' text-xs  text-gray-800'>
					<h5 className='font-bold px-[12px] mt-[12px]'>ABOUT</h5>
					<div className='grid grid-cols-3 lg:flex lg:flex-col'>
						<p className='footerInfoLink'>Host your home</p>
						<p className='footerInfoLink'>Host an Online Experience</p>
						<p className='footerInfoLink'>Host an Experience</p>
						<p className='footerInfoLink'>Responsible hosting</p>
						<p className='footerInfoLink'>Resource Centre</p>
						<p className='footerInfoLink'>Community Centre</p>
					</div>
					<div className='mt-5 border border-b-1 lg:hidden'></div>
				</div>
				<div className=' text-xs  text-gray-800'>
					<h5 className='font-bold px-[12px] mt-[12px]'>SUPPORT</h5>
					<div className='grid grid-cols-3 lg:flex lg:flex-col'>
						<p className='footerInfoLink'>Our COVID-19 Response</p>
						<p className='footerInfoLink'>Help Centre</p>
						<p className='footerInfoLink'>Cancellation options</p>
						<p className='footerInfoLink'>Cancellation options</p>
						<p className='footerInfoLink'>Trust & Safety</p>
					</div>
					<div className='mt-5 border border-b-1 lg:hidden'></div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
