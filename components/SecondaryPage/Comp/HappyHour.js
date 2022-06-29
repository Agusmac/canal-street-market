import React from 'react'
import Image from 'next/image'


const HappyHour = () => {
  return (
    <div className='flex main-grid mt-90 mb-90 happy-hour'>
      <div className='grid-center-content emoji-face'><Image src='/images/smile-emoji.svg' alt='smile-emooji' height={180} width={177} /></div>
      <div><h2>Happy  Hour</h2>
        <p>Every Weekday, 5 - 7PM $4 Beer & $7 Wine Come</p>
        <p>Hang With Us! **** Tappy Tuesday Pay with Apple</p>
        <p>Pay and receive 20% off *Beer and Wine excluded*</p>
      </div>
      <div className='grid-center-content emoji-face' style={{transform: "rotateZ(180deg)"}}>
      <Image src='/images/smile-emoji.svg' alt='smile-emooji' height={180} width={177} />
      </div>
    </div>
  )
}

export default HappyHour