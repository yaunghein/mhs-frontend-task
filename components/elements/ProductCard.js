import Image from 'next/image'

export default function ProductCard({ type }) {
	return (
		<div className='cursor-pointer mb-4 md:mb-0'>
			<div
				className={`relative bg-gray-100 w-full aspect-square rounded-lg flex items-center justify-center ${
					type === 'promotions' && 'rounded-tl-none'
				}`}>
				<Image
					alt=''
					src='/icons/bag-plain.svg'
					width='56'
					height='56'
				/>

				{/* heart icon  */}
				<div className='absolute top-2 right-2'>
					<Image
						alt='Heart Icon'
						src='/icons/heart.svg'
						width='24'
						height='24'
					/>
				</div>

				{/* off percent text  */}
				{type === 'promotions' && (
					<p className='absolute top-0 left-0 bg-[#DF1F2D] px-2 py-1 text-xs text-white'>
						00% OFF
					</p>
				)}
			</div>

			<p className='max-w-[150px] text-sm text-gray-700 font-semibold mt-2'>
				Sample Product with long name
			</p>
			<p
				className={`text-[18px] ${
					type === 'buyOneGetOne' ? 'text-gray-700' : 'text-[#DF1F2D]'
				} font-semibold`}>
				54,000 Ks
			</p>
			{type === 'promotions' && (
				<p className='text-sm text-gray-400 font-semibold line-through'>
					60,000 Ks
				</p>
			)}
		</div>
	)
}
