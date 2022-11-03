import React, { useState,useEffect } from 'react'
import MainPage from '../components/MainPage/MainPage'
import Sidebar from '../components/Sidebar/Sidebar'

import Head from 'next/head'
import Modal from '../components/Modal/Modal'


export default function Home() {

  const [fullWidth, setfullWidth] = useState('main')

  const [openModal, setOpenModal] = useState(false)


  return (
      <>
        <Head>
          <title>Canal-Street-Market | Agustin</title>
          <meta name="google-site-verification" content="SOPUd6mBzAIrfFMNsjn0yW4WggEpMc43Sq2-WZdR9NY" />
          <meta name='description' content="This site was made by Agustin Mac Rae-Frontend Developer" />
      </Head>
    <div>
    <div>
    <Modal fullWidth={fullWidth} setfullWidth={setfullWidth} openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
      <div className="flex">
        <MainPage fullWidth={fullWidth} setfullWidth={setfullWidth} setOpenModal={setOpenModal}/>
        <Sidebar fullWidth={fullWidth} setfullWidth={setfullWidth} setOpenModal={setOpenModal}/>
      </div>
    </div>
    </>
  )
}




// this should give moouse-drag functionality for people without a wheel on their mouse(or too much of a dummie?)

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