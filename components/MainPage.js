import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'




const MainPage = ({ fullWidth, setfullWidth }) => {

  return (
    <div onClick={() => setfullWidth('main')} className={`MainDiv ${fullWidth == 'main' ? 'fullwidth' : ''}`}>
      <Navbar fullWidth={fullWidth} />

      <div className={`fix ${fullWidth != 'main' && 'op-0'}`}>

        <div className={`main-title-div fade-in  `}>
          <h1> Canal Street Market is a carefully
            curated retail market, food hall & community
            space open year-round at 265 Canal Street.
            Support Small Business this weekend!
          </h1>
        </div>
        <div className='fade-in mb-120'>
          <Image src='/images/home-hero.avif' height={1956} width={2542} />
        </div>

        <div >
          <h2 className={`new-kind mx-60 fade-in`}>A New Kind of Market</h2>
        </div>


      </div>

    </div>
  )
}

export default MainPage