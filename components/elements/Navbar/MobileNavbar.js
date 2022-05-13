import Image from 'next/image'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

export default function MobileNavbar({ scrollY }) {
	return (
		<Popover>
			<Popover.Button className='flex items-center'>
				<span
					className={`${
						scrollY > 0 ? 'text-white' : 'text-[#DF1F2D]'
					} text-base font-semibold`}>
					MENU
				</span>
			</Popover.Button>

			<Transition
				as={Fragment}
				enter='transition ease-out duration-200'
				enterFrom='opacity-0 translate-y-1'
				enterTo='opacity-100 translate-y-0'
				leave='transition ease-in duration-150'
				leaveFrom='opacity-100 translate-y-0'
				leaveTo='opacity-0 translate-y-1'>
				<Popover.Panel className='w-full bg-white absolute left-0 z-10 mt-4 origin-top-right rounded-md shadow-lg'>
					<div className='grid gap-4 p-6'>
						<div className='flex items-center cursor-pointer'>
							<Image
								alt='Bag Icon'
								src='/icons/bag.svg'
								width='32'
								height='32'
							/>
							<span className='text-gray-700 text-sm font-semibold ml-2'>
								Wishlist
							</span>
						</div>

						<div className='flex items-center cursor-pointer'>
							<Image
								alt='Bag Icon'
								src='/icons/trolley.svg'
								width='32'
								height='32'
							/>
							<span className='text-gray-700 text-sm font-semibold ml-2'>
								Product List
							</span>
						</div>

						<div className='flex items-center cursor-pointer'>
							<Image
								alt='Bag Icon'
								src='/icons/notification.svg'
								width='32'
								height='32'
							/>
							<span className='text-gray-700 text-sm font-semibold ml-2'>
								Notifications
							</span>
						</div>

						<div className='flex items-center cursor-pointer'>
							<Image
								alt='Bag Icon'
								src='/icons/account.svg'
								width='32'
								height='32'
							/>
							<span className='text-gray-700 text-sm font-semibold ml-2'>
								My Account
							</span>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	)
}
