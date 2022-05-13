import Image from 'next/image'
import { Fragment, useState, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'

// elements
import MobileNavbar from './MobileNavbar'

export default function Navbar() {
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}
		handleScroll()
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	})

	return (
		<header
			className={`sticky sm:fixed z-50 top-0 left-0 right-0 w-full transition-all ${
				scrollY > 0 && 'bg-[#DF1F2D] shadow-md'
			}`}>
			{/* nav container  */}
			<div
				className={`max-w-7xl mx-auto px-4 sm:px-10 transition-all ${
					scrollY > 0 ? 'py-3' : 'py-4'
				} flex items-center justify-between`}>
				{/* search box for pc */}
				<div className='w-96 hidden sm:block'>
					<div className='relative w-64'>
						<input
							type='text'
							placeholder='Search product'
							className='w-full bg-black bg-opacity-70 rounded-lg px-3 py-2 placeholder-white text-white text-sm outline-none focus:ring-2 focus:ring-[#FFE917]'
						/>
						<div className='absolute z-10 right-3 top-[53%] transform -translate-y-1/2'>
							<Image
								alt='Search Icon'
								src='/icons/search.svg'
								width='14'
								height='14'
							/>
						</div>
					</div>
				</div>

				{/* logo  */}
				<div
					className={`relative ${
						scrollY > 0 ? 'w-10 h-10' : 'w-11 h-11'
					}`}>
					<Image
						alt='Search Icon'
						src='/icons/logo.svg'
						layout='fill'
					/>
				</div>

				{/* nav links for pc */}
				<div className='w-96 hidden sm:block'>
					<div className='flex items-center justify-end'>
						{/* currency switcher */}
						<Popover className='relative'>
							<Popover.Button className='flex items-center'>
								<Image
									alt=''
									src='/flags/myanmar.svg'
									width='22'
									height='16'
								/>
								<span className='text-white text-sm font-bold mx-2'>
									Ks
								</span>
								<div className='shrink-0 mb-1'>
									<Image
										alt=''
										src='/icons/arrow-down.svg'
										width='10'
										height='6'
									/>
								</div>
							</Popover.Button>

							<Transition
								as={Fragment}
								enter='transition ease-out duration-200'
								enterFrom='opacity-0 translate-y-1'
								enterTo='opacity-100 translate-y-0'
								leave='transition ease-in duration-150'
								leaveFrom='opacity-100 translate-y-0'
								leaveTo='opacity-0 translate-y-1'>
								<Popover.Panel className='bg-white absolute z-10 right-0 mt-2 origin-top-right rounded-md shadow-lg border border-gray-100'>
									<div className='grid justify-center gap-4 p-4'>
										<div className='flex items-center cursor-pointer'>
											<div className='relative w-5 h-[14px]'>
												<Image
													alt=''
													src='/flags/us.png'
													layout='fill'
												/>
											</div>
											<span className='text-gray-700 text-sm font-bold mx-2'>
												USD
											</span>
										</div>
										<div className='flex items-center cursor-pointer'>
											<div className='relative w-5 h-[14px]'>
												<Image
													alt=''
													src='/flags/iceland.png'
													layout='fill'
												/>
											</div>
											<span className='text-gray-700 text-sm font-bold mx-2'>
												ISK
											</span>
										</div>
									</div>
								</Popover.Panel>
							</Transition>
						</Popover>

						<div className='flex items-center justify-center ml-6 cursor-pointer'>
							<Image
								alt='Bag Icon'
								src='/icons/bag.svg'
								width='32'
								height='32'
							/>
						</div>
						<div className='flex items-center justify-center ml-2 cursor-pointer'>
							<Image
								alt='Bag Icon'
								src='/icons/trolley.svg'
								width='32'
								height='32'
							/>
						</div>
						<div className='flex items-center justify-center ml-2 cursor-pointer'>
							<Image
								alt='Bag Icon'
								src='/icons/notification.svg'
								width='32'
								height='32'
							/>
						</div>
						<div className='flex items-center justify-center ml-2 cursor-pointer'>
							<Image
								alt='Bag Icon'
								src='/icons/account.svg'
								width='32'
								height='32'
							/>
						</div>
					</div>
				</div>

				<div className='flex items-center gap-6 sm:hidden'>
					{/* currency switcher for mobile  */}
					<div className='sm:hidden'>
						<Popover className='relative'>
							<Popover.Button className='flex items-center'>
								<Image
									alt=''
									src='/flags/myanmar.svg'
									width='22'
									height='16'
								/>
								<span
									className={`${
										scrollY > 0
											? 'text-white'
											: 'text-[#DF1F2D]'
									} text-base font-bold mx-2`}>
									Ks
								</span>
								<div className='shrink-0 mb-1'>
									<Image
										alt=''
										src={`/icons/${
											scrollY > 0
												? 'arrow-down'
												: 'arrow-down-red'
										}.svg`}
										width='10'
										height='6'
									/>
								</div>
							</Popover.Button>

							<Transition
								as={Fragment}
								enter='transition ease-out duration-200'
								enterFrom='opacity-0 translate-y-1'
								enterTo='opacity-100 translate-y-0'
								leave='transition ease-in duration-150'
								leaveFrom='opacity-100 translate-y-0'
								leaveTo='opacity-0 translate-y-1'>
								<Popover.Panel className='bg-white absolute z-10 right-0 mt-4 origin-top-right rounded-md shadow-lg'>
									<div className='grid justify-center gap-4 p-4'>
										<div className='flex items-center cursor-pointer'>
											<div className='relative w-5 h-[14px]'>
												<Image
													alt=''
													src='/flags/us.png'
													layout='fill'
												/>
											</div>
											<span className='text-gray-700 text-sm font-bold mx-2'>
												USD
											</span>
										</div>
										<div className='flex items-center cursor-pointer'>
											<div className='relative w-5 h-[14px]'>
												<Image
													alt=''
													src='/flags/iceland.png'
													layout='fill'
												/>
											</div>
											<span className='text-gray-700 text-sm font-bold mx-2'>
												ISK
											</span>
										</div>
									</div>
								</Popover.Panel>
							</Transition>
						</Popover>
					</div>

					<div className='-mb-1 sm:hidden'>
						<Image
							alt='Search Icon'
							src={`/icons/${
								scrollY > 0 ? 'search' : 'search-red'
							}.svg`}
							width='14'
							height='14'
						/>
					</div>

					{/* mobile nav bar */}
					<div className='sm:hidden'>
						<MobileNavbar scrollY={scrollY} />
					</div>
				</div>
			</div>
		</header>
	)
}
