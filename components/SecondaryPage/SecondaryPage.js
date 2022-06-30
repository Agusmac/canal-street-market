import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import SecondaryPageHero from './Comp/SecondaryPageHero'
import MenuGrid from './Comp/MenuGrid'
import HappyHour from './Comp/HappyHour'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar'
// import { foodDataArray } from '../../data'

const SecondaryPage = ({ fullWidth, color, setOpenModal, data }) => {

  // console.log(data);

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
        <SecondaryPageHero color={color} {...data} />
        <MenuGrid menuArray={data.menuArray} folder={data.folder} />
        <HappyHour {...data} />
        <Footer secFoot={true} />
      </div>
    </div>
  )
}

export default SecondaryPage