import React, { useState } from 'react'
import MainPage from '../components/MainPage'
import Sidebar from '../components/Sidebar'


export default function Home() {

  const [fullWidth, setfullWidth] = useState('main')

  return (
    <div >

      <div className="flex">
        <MainPage fullWidth={fullWidth} setfullWidth={setfullWidth} />
        <Sidebar fullWidth={fullWidth} setfullWidth={setfullWidth}/>
{/*         
        <div onClick={() => setfullWidth('blue')} className={`blue sidelinks slide-in-top ${fullWidth == 'blue' ? 'fullwidth' : ''}`}><div> 餐饮 </div></div>
        <div onClick={() => setfullWidth('red')} className={`red sidelinks  slide-in-top ${fullWidth == 'red' ? 'fullwidth' : ''}`}><div>購物</div></div>
        <div  onClick={() => setfullWidth('yellow')} className={`yellow sidelinks  slide-in-top ${fullWidth == 'yellow' ? 'fullwidth' : ''}`}><div>文化</div></div> */}
      </div>


    </div>
  )
}
