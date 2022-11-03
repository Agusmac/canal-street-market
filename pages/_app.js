import '../styles/globals.css'
import '../components/Sidebar/Sidebar.css'
import '../components/MainPage/MainPage.css'
import '../components/Navbar/Navbar.css'
import '../styles/Animation.css'
import '../components/Footer/Footer.css'
import '../components/SecondaryPage/SecondaryPage.css'
import '../components/Modal/Modal.css'
import  '../components/YellowPage/Yellow.css'
import Head from 'next/head'

  
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} >
        <Head>
        <meta name="google-site-verification" content="SOPUd6mBzAIrfFMNsjn0yW4WggEpMc43Sq2-WZdR9NY" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <link rel="shortcut icon" href="/images/site/lobster.jpg" /> */}
      </Head>
  </Component>
}

export default MyApp
