import Image from 'next/image'

// elements
import ProductCard from '../elements/ProductCard'

// common
import Container from '../common/Container'

export default function CategorySection({
	title,
	haveBottomBorder,
	type,
	icon,
}) {
	return (
		<Container haveBottomBorder={haveBottomBorder}>
			<div className='flex items-center mb-6'>
				{icon && (
					<div className='mr-2 -mb-2'>
						<Image alt={title} src={icon} width='56' height='56' />
					</div>
				)}
				<h2 className='text-2xl sm:text-3xl text-gray-900 font-semibold uppercase'>
					{title}
				</h2>
				<a
					href=''
					className='text-sm text-gray-700 font-semibold ml-auto'>
					View More
				</a>
			</div>

			<div className='grid gap-4 sm:gap-9 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
				<ProductCard type={type} />
				<ProductCard type={type} />
				<ProductCard type={type} />
				<ProductCard type={type} />
				<ProductCard type={type} />
				<ProductCard type={type} />
			</div>
		</Container>
	)
}
