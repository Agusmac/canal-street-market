import React from 'react'
import Image from 'next/image'


const HappyHour = ({happyTitle,happyP,happyImg}) => {
  return (
    <div className='flex main-grid mt-90 mb-90 happy-hour'>
      <div className='grid-center-content emoji-face'><Image src={`/images/${happyImg[0]}.svg`} alt={happyImg[0]} width={happyImg[1]} height={happyImg[2]}  /></div>
      <div><h2>{happyTitle}</h2>
        <p>{happyP}</p>
        {/* <p>Every Weekday, 5 - 7PM $4 Beer & $7 Wine Come</p>
        <p>Hang With Us! **** Tappy Tuesday Pay with Apple</p>
        <p>Pay and receive 20% off *Beer and Wine excluded*</p> */}
      </div>
      <div className='grid-center-content emoji-face' style={{ transform: "rotateZ(180deg)" }}>
        <Image src={`/images/${happyImg[0]}.svg`} alt={happyImg[0]} width={happyImg[1]} height={happyImg[2]}  />
      </div>
    </div>
  )
}

export default HappyHour