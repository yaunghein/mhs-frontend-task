// elements
import Navbar from '../components/elements/Navbar'

import '../styles/globals.css'
import '@splidejs/react-splide/css/core'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<main>
				<Component {...pageProps} />
			</main>
		</>
	)
}

export default MyApp
