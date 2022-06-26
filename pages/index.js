import React, { useState } from 'react'
import MainPage from '../components/MainPage'
import Sidebar from '../components/Sidebar'

import Head from 'next/head'


export default function Home() {

  const [fullWidth, setfullWidth] = useState('main')


  return (
      <>
        <Head>
          <title>Canal-Street-Market | Agustin</title>
          <meta name='description' content="This site was made by Agustin Mac Rae-Frontend Developer" />
      </Head>
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
    </>
  )
}






//   useEffect(() => {
//     const ele = document.querySelector('.MainDiv');
//     ele.scrollTop = 100;
//     ele.scrollLeft = 150;
  
//     let pos = { top: 0, left: 0, x: 0, y: 0 };
  

//         document.addEventListener('mousemove', mouseMoveHandler);
//         document.addEventListener('mouseup', mouseUpHandler);
    
  
//     const mouseMoveHandler = function (e) {
//       // How far the mouse has been moved
//       const dx = e.clientX - pos.x;
//       const dy = e.clientY - pos.y;
  
//       // Scroll the element
//       ele.scrollTop = pos.top - dy;
//       ele.scrollLeft = pos.left - dx;
//   };
//   const mouseUpHandler = function () {
//       document.removeEventListener('mousemove', mouseMoveHandler);
//       document.removeEventListener('mouseup', mouseUpHandler);
  
//       ele.style.cursor = 'grab';
//       ele.style.removeProperty('user-select');
//   };

//   const mouseDownHandler = function(e) {
//     // Change the cursor and prevent user from selecting the text
//     ele.style.cursor = 'grabbing';
//     ele.style.userSelect = 'none';
    
// };


//   }, [])