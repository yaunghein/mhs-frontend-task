// elements
import ProductCard from '../elements/ProductCard'

// common
import Container from '../common/Container'

export default function BuyOneGetOne() {
	return (
		<Container bgColor='#FFE917'>
			<div className='flex items-center justify-between mb-6'>
				<h2 className='text-2xl sm:text-3xl text-gray-900 font-semibold uppercase'>
					Buy 1 Get 1
				</h2>
				<a href='' className='text-sm text-gray-700 font-semibold'>
					View More
				</a>
			</div>

			<div className='grid gap-4 sm:gap-9 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
				<ProductCard type='buyOneGetOne' />
				<ProductCard type='buyOneGetOne' />
				<ProductCard type='buyOneGetOne' />
				<ProductCard type='buyOneGetOne' />
				<ProductCard type='buyOneGetOne' />
				<ProductCard type='buyOneGetOne' />
			</div>
		</Container>
	)
}
