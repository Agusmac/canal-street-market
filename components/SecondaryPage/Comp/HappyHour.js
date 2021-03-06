import React from 'react'
import Image from 'next/image'


const HappyHour = ({ happyTitle, happyP, happyImg, menuArray }) => {


  return (
    <div className='flex main-grid mt-90 mb-90 happy-hour'>
      <div className={`grid-center-content  ${menuArray ? 'emoji-face' : 'float-head'}`}><Image src={`/images/${happyImg[0]}.svg`} alt={happyImg[0]} width={happyImg[1]} height={happyImg[2]} /></div>
      <div><h2>{happyTitle}</h2>
        <p>{happyP}</p>
      </div>
      <div className={`grid-center-content  ${menuArray ? 'emoji-face' : 'float-head'}`} style={{ transform: "rotateZ(180deg)" }}>
        <Image src={`/images/${happyImg[0]}.svg`} alt={happyImg[0]} width={happyImg[1]} height={happyImg[2]} />
      </div>
    </div>
  )
}

export default HappyHour