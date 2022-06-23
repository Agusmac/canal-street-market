import React from 'react'
import Navbar from './Navbar'




const MainPage = ({ fullWidth, setfullWidth }) => {

  return (
    <div onClick={() => setfullWidth('main')} className={`MainDiv ${fullWidth == 'main' ? 'fullwidth' : ''}`}>
      <Navbar fullWidth={fullWidth} />
      <div className={`main-title-div  ${fullWidth !='main' && 'op-0'}`}><h1> Canal Street Market is a carefully
        curated retail market, food hall & community
        space open year-round at 265 Canal Street.
        Support Small Business this weekend!
      </h1></div>

    </div>
  )
}

export default MainPage