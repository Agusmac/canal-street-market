import Image from 'next/image'
import React from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar'




const MainPage = ({ fullWidth, setfullWidth }) => {

  return (
    <div onClick={() => setfullWidth('main')} className={`MainDiv ${fullWidth == 'main' ? 'fullwidth' : ''}`}>
      <Navbar fullWidth={fullWidth} />

      <div className={`fix ${fullWidth != 'main' && 'op-0'}`}>
        {/*  */}
        <div className={`main-title-div mx-60-var fade-in  `}>
          <h1> Canal Street Market is a carefully
            curated retail market, food hall & community
            space open year-round at 265 Canal
            Street. <span>Support Small Business</span>  this weekend!
          </h1>
        </div>
        <div className='fade-in mb-120'>
          <Image src='/images/home-hero.avif' height={1956} width={2542} />
        </div>
        {/*  */}
        <div >
          <h2 className={`main-second-title mx-60-var mb-60 fade-in`}>A New Kind of Market</h2>
        </div>

        <div className="main-grid flex mx-60-var mb-180">
          <div>
            <Image className='mb-30' src='/images/home_page_one.avif' height={920} quality={100} width={680} />
            <p className='mt-22'>
              Merging retail, food, art, and culture, Canal Street
              Market highlights top retail and design concepts, restaurants,
              and up-and-coming players in the downtown New York City community.</p>
          </div>
          <div>
            <Image src='/images/home_page_two.avif' height={920} quality={100} width={680} />
            <p className='mt-22'>Retail Market Hours:</p>
            <p> Fri– Sun: 11:00AM - 7:00PM</p>

          </div>
          <div>
            <Image src='/images/home_page_three.avif' height={920} quality={100} width={680} />
            <p className='mt-22'>Food Hall Hours:</p>
            <p>Mon – Thurs: 11:00AM - 6:00PM</p>
            <p>Fri– Sun: 11:00AM - 7:00PM</p>
          </div>
        </div>
        {/*  */}

        <div className='mx-60-var'>

          <div className='main-grid flex mb-60'>
            <div className='grid-center-content'>  <Image src='/images/stolen-japan.svg' height={120} quality={100} width={120} /></div>
            <div className='grid-center-content'><h2 className={`main-third-title fade-in`}> Market Events</h2></div>
            <div className='grid-center-content'> <Image src='/images/stolen-japan.svg' height={120} quality={100} width={120} /></div>
          </div>

          <div className='main-grid flex  textcenter sideline-animation'>
            <div>
              <p className='mb-15 date'>10/22</p>
              <p>Small Business Retail Pop Up Weekend!</p>
            </div>
            <div>
              <p className='mb-15 date'>02/07</p>
              <p>New Balance x Paperboy Paris by Greenhouse @ </p>
              <p>Canal Street Market</p>
            </div>
            <div>
              <p className='mb-15 date'>12/11</p>
              <p> Hack City 12/11</p>
            </div>
          </div>

          <div className='white-button textcenter mx-auto mb-90'>
            see all
          </div>

          <div className='main-grid flex textcenter location-div'>
            <div className='location-subdiv hover-pointed-anim'>
              <h3>265 Canal St.</h3>
              <h3>New York, NY</h3>
            </div>
            <div className='location-subdiv hover-pointed-anim none-1000px'>
              <div className='map'></div>
            </div>
          </div>


        </div>
        {/*  */}
      
          <Footer />

  

      </div>

    </div>
  )
}

export default MainPage