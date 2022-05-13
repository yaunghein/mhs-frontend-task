// common
import Container from '../common/Container'

export default function Footer() {
	return (
		<>
			<Container bgColor='#DF1F2D'>
				<div className='grid gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
					<div className='text-white flex flex-col gap-4'>
						<h2 className='text-lg font-semibold'>
							Customer Service
						</h2>
						<a href='' className='text-base'>
							Terms & Pravicy Policy
						</a>
						<a href='' className='text-base'>
							Return Policy
						</a>
					</div>

					<div className='text-white flex flex-col gap-4'>
						<h2 className='text-lg font-semibold'>Language</h2>
						<a href='' className='text-base'>
							Myanmar (Unicode)
						</a>
						<a href='' className='text-base'>
							English
						</a>
					</div>

					<div className='text-white flex flex-col gap-4'>
						<h2 className='text-lg font-semibold'>Contact Us</h2>
						<a href='' className='text-base max-w-[230px]'>
							No 17B, Myay Kha St, Mayangone, 6 Miles, Yangon,
							Myanmar
						</a>
						<a href='' className='text-base'>
							+95 9 345 454 345
						</a>
					</div>
				</div>
			</Container>

			<p className='bg-white text-gray-700 text-sm text-center px-10 py-3'>
				All right reserved. Made with all the love in ShopDoora Co, Ltd.
			</p>
		</>
	)
}
