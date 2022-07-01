import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar'
import HappyHour from '../SecondaryPage/Comp/HappyHour'
import SecondaryPageHero from '../SecondaryPage/Comp/SecondaryPageHero'
import YellowFeatures from './YellowFeatures'


const YellowPage = ({ fullWidth, color, setOpenModal, data }) => {

  try { document.getElementById(`secondary-page`).scrollIntoView({ behavior: "smooth", block: "start" }) } catch (error) { console.log("failed") }

  const [Opened, setOpened] = useState(false)

  useEffect(() => {
    if (fullWidth == color) {
      setTimeout(() => {
        setOpened(true)
      }, 800);
    }
  }, [fullWidth])


  return (
    <div id='secondary-page' className={`Secondary-page ${fullWidth == color && 'fix'} ${Opened && 'op-1'} `}>
      <div className='secondary-Hero pt-20 mx-60-var mt--100 mt--300-md'>
        <div className="display-md">
          <Navbar setOpenModal={setOpenModal} fullWidth={fullWidth} />
        </div>
        <SecondaryPageHero {...data} />

        <YellowFeatures />
        <HappyHour {...data}/>
        <Footer secFoot/>
      </div>
    </div>
  )
}

export default YellowPage