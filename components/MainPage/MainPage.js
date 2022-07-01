import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'


const MainPage = ({ fullWidth, setfullWidth,setOpenModal}) => {



  const [mainDisplay, setMainDisplay] = useState(true)

  useEffect(() => {
    if (fullWidth != 'main') {
      setTimeout(() => {
        setMainDisplay(false)
      }, 700);
    } else {
      setMainDisplay(true)
      try { document.getElementById(`Main-Page`).scrollIntoView({ behavior: "smooth", block: "start" }) } catch (error) { console.log("failed") }
    }
  }, [fullWidth])



  return (
    <div id='Main-Page' onClick={() => setfullWidth('main')} className={`MainDiv ${fullWidth == 'main' ? 'fullwidth' : 'total-no-display-md cursor-pointer'}`}>
      <Navbar fullWidth={fullWidth} setOpenModal={setOpenModal}  />

      <div className={`fix  ${fullWidth != 'main' && 'op-0 '}${!mainDisplay && 'total-no-display'}`}>
        {/*  */}
        <div className={`main-title-div mx-60-var fade-in  `}>
          <h1> Canal Street Market is a carefully
            curated retail market, food hall & community
            space open year-round at 265 Canal
            Street. <span>Support Small Business</span>  this weekend!
          </h1>
        </div>
        <div className='fade-in mb-120 mb-60-sm hero-img-div'>
          <div></div>
        </div>
        {/*  */}
        <div >
          <h2 className={`main-second-title mx-60-var mb-60 fade-in`}>A New Kind of Market</h2>
        </div>

        <div className="main-grid flex fade-in mx-60-var mb-180 mb-90-sm">
          <div>
            <Image className='mb-30' src='/images/home_page_one.avif' alt='window' height={920} quality={100} width={680} />
            <p className='mt-22'>
              Merging retail, food, art, and culture, Canal Street
              Market highlights top retail and design concepts, restaurants,
              and up-and-coming players in the downtown New York City community.</p>
          </div>
          <div>
            <Image src='/images/home_page_two.avif' alt='Retail-market' height={920} quality={100} width={680} />
            <p className='mt-22'>Retail Market Hours:</p>
            <p> Fri– Sun: 11:00AM - 7:00PM</p>

          </div>
          <div>
            <Image src='/images/home_page_three.avif' alt='Food-market' height={920} quality={100} width={680} />
            <p className='mt-22'>Food Hall Hours:</p>
            <p>Mon – Thurs: 11:00AM - 6:00PM</p>
            <p>Fri– Sun: 11:00AM - 7:00PM</p>
          </div>
        </div>
        {/*  */}

        <div className='mx-60-var fade-in bg-white'>

          <div className='main-grid flex mb-60 mb-30-sm gap-30-sm'>
            <div className='grid-center-content'>
              <div className=''>
                <Image src='/images/stolen-japan.svg' alt='Japanese-logo' height={120} quality={100} width={120} />
              </div>
            </div>
            <div className='grid-center-content'><h2 className={`main-third-title fade-in`}> Market Events</h2></div>
            <div className='grid-center-content'>
              <div className=''>
                <Image src='/images/stolen-japan.svg' alt='Japanese-logo' height={120} quality={100} width={120} />
              </div>
            </div>
          </div>

          <div className='main-grid flex textcenter sideline-animation'>
            <div className='side-anim-sm'>
              <p className='mb-15 date'>10/22</p>
              <p>Small Business Retail Pop Up Weekend!</p>
            </div>
            <div className='side-anim-sm'>
              <p className='mb-15 date'>02/07</p>
              <p>New Balance x Paperboy Paris by Greenhouse @ </p>
              <p>Canal Street Market</p>
            </div>
            <div className='side-anim-sm'>
              <p className='mb-15 date'>12/11</p>
              <p> Hack City 12/11</p>
            </div>
          </div>

          <div className='white-button textcenter mx-auto mb-90 mb-60-sm cursor-pointer' style={{ backgroundColor: "white" }}>
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