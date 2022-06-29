import '../styles/globals.css'
import '../styles/Sidebar.css'
import '../styles/MainPage.css'
import '../styles/Navbar.css'
import '../styles/Animation.css'
import '../components/Footer/Footer.css'
import '../components/SecondaryPage/SecondaryPage.css'
import '../components/Modal/Modal.css'
import Head from 'next/head'
  


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} >
        <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <link rel="shortcut icon" href="/images/site/lobster.jpg" /> */}
      </Head>
  </Component>
}

export default MyApp
