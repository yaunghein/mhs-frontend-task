import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'

function AdSlide({ image }) {
	return <Image alt='' src={image} width='1920' height='600' />
}

const options = {
	type: 'fade',
	rewind: true,
	rewindByDrag: true,
	speed: 800,
	drag: true,
	autoplay: true,
	interval: 3000,
	classes: {
		arrows: 'hidden',
		navigator: 'hidden',
	},
}

export default function AdsCarousel() {
	return (
		<Splide
			aria-label='Banner'
			className='w-full -mb-[1.5rem] sm:-mb-[1rem]'
			options={options}>
			<SplideSlide className=''>
				<AdSlide image='/images/banner1.jpg' />
			</SplideSlide>
			<SplideSlide>
				<AdSlide image='/images/banner2.jpg' />
			</SplideSlide>
			<SplideSlide>
				<AdSlide image='/images/banner3.jpg' />
			</SplideSlide>
		</Splide>
	)
}
