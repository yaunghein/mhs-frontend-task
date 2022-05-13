export default function Container({ bgColor, haveBottomBorder, children }) {
	return (
		<>
			<section
				style={{ backgroundColor: bgColor }}
				className='-mb-4 md:mb-0'>
				<div className='max-w-7xl mx-auto px-4 sm:px-10 py-10'>
					{children}
				</div>
			</section>
			{haveBottomBorder && (
				<div className='w-full h-[10px] bg-gray-100' />
			)}
		</>
	)
}
