import Image from 'next/image'

// common
import Container from '../common/Container'

function Category() {
	return (
		<div className='max-w-20 mx-auto cursor-pointer'>
			<Image
				alt='Phone Category'
				src='/images/phone-category.jpg'
				width='160'
				height='160'
			/>
			<p className='text-sm text-gray-700 text-center font-semibold mt-1'>
				Sample Category
			</p>
		</div>
	)
}

export default function Categories() {
	return (
		<Container>
			<h2 className='text-2xl sm:text-3xl text-gray-900 text-center font-semibold uppercase mb-6 '>
				Categories
			</h2>

			<div className='grid gap-10 sm:gap-20 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8'>
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />

				{/* view all */}
				<div className='cursor-pointer'>
					<div className='text-gray-300 text-2xl w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center'>
						•••
					</div>
					<p className='text-sm text-center text-gray-400 font-semibold mt-3'>
						View All
					</p>
				</div>
			</div>
		</Container>
	)
}
