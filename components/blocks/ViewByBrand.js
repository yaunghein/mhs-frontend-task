import Image from 'next/image'

// commom
import Container from '../common/Container'

export default function ViewByBrand() {
	return (
		<Container haveBottomBorder>
			<h2 className='text-2xl sm:text-3xl text-gray-900 text-center xl:text-left font-semibold uppercase mb-6'>
				View by brands
			</h2>
			<div className='flex items-center justify-center gap-9 flex-wrap mb-4'>
				<div className='w-32 flex items-center justify-center'>
					<Image
						alt='Apple'
						src='/images/apple.png'
						width='74'
						height='91'
					/>
				</div>

				<div className='w-32 flex items-center justify-center'>
					<Image
						alt='Sammsung'
						src='/images/samsung.png'
						width='134'
						height='44'
					/>
				</div>

				<div className='w-32 flex items-center justify-center'>
					<Image
						alt='Google'
						src='/images/google.png'
						width='72'
						height='72'
					/>
				</div>

				<div className='w-32 flex items-center justify-center'>
					<Image
						alt='One Plus'
						src='/images/oneplus.png'
						width='124'
						height='30'
					/>
				</div>

				<div className='w-32 flex items-center justify-center'>
					<Image
						alt='Xiaomi'
						src='/images/xiaomi.png'
						width='96'
						height='96'
					/>
				</div>

				<div className='w-32 flex items-center justify-center'>
					<Image
						alt='Realme'
						src='/images/realme.png'
						width='100'
						height='45'
					/>
				</div>
				<div className='w-32 flex items-center justify-center'>
					<Image
						alt='Hwawei'
						src='/images/hwawei.png'
						width='110'
						height='112'
					/>
				</div>

				<div className='w-32 sm:w-auto h-full flex items-center justify-center'>
					<span className='text-sm text-[#DF1F2D] font-semibold'>
						View All
					</span>
				</div>
			</div>
		</Container>
	)
}
