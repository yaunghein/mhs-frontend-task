import Image from 'next/image'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'

function AdSlide({ image }) {
	return (
		<Image
			alt=''
			src={image}
			width='1120'
			height='560'
			className='hidden'
		/>
	)
}

const options = {
	type: 'slide',
	speed: 500,
	gap: '24px',
	start: 1,
	padding: '20%',
	drag: true,
	classes: {
		arrows: 'hidden',
		navigator: 'hidden',
	},
}

export default function AdsCarousel() {
	return (
		<Splide
			aria-label='Ads Carousel'
			className='max-w-[1120px] mx-auto relative'
			options={options}
			hasTrack={false}>
			<SplideTrack className='-mb-[1.4rem]'>
				<SplideSlide>
					<AdSlide image='/images/ad1.jpg' />
				</SplideSlide>
				<SplideSlide>
					<AdSlide image='/images/ad2.jpg' />
				</SplideSlide>
				<SplideSlide>
					<AdSlide image='/images/ad3.jpg' />
				</SplideSlide>
				<SplideSlide>
					<AdSlide image='/images/ad1.jpg' />
				</SplideSlide>
				<SplideSlide>
					<AdSlide image='/images/ad2.jpg' />
				</SplideSlide>
				<SplideSlide>
					<AdSlide image='/images/ad3.jpg' />
				</SplideSlide>
			</SplideTrack>

			<div className='splide__arrows hidden sm:block'>
				<button className='splide__arrow splide__arrow--prev absolute top-0 bottom-0 left-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition flex items-center justify-center w-16'>
					<Image
						alt='Previous Slide'
						src='/icons/arrow-left.svg'
						width='20'
						height='32'
					/>
				</button>
				<button className='splide__arrow splide__arrow--next absolute top-0 bottom-0 right-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition flex items-center justify-center w-16'>
					<Image
						alt='Next Slide'
						src='/icons/arrow-right.svg'
						width='20'
						height='32'
					/>
				</button>
			</div>
		</Splide>
	)
}
