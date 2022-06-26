
import React, { useEffect, useState } from 'react'


const sideArray = ['.yellow', '.red', '.blue']

export default function Sidebar({ fullWidth, setfullWidth }) {


    const [test, settest] = useState(0)

    const [fullSide, setFullSide] = useState(false)

    const increase = () => {
        console.log(test)
        settest(prev => prev + 1);
      };
     
    useEffect(() => {
        // const boxes = document.querySelectorAll('.sidelinks');

        let timer = 100
        sideArray.map(i => {
            setTimeout(() => {
                increase()
                
                // document.querySelector(item).classList.add("slide-in-top-final")
                // document.querySelector(item).classList.remove("slide-in-top")
            }, timer);
            timer += 200
        })
        setTimeout(() => {
            setFullSide(true)
            document.body.style.overflow = "scroll";

        }, 1200);



    }, [])

    



    return (
        <>
            <div onClick={() => setfullWidth('blue')} className={`blue sidelinks ${fullSide && 'fullHeightSidebar'} ${test < 6 ? 'slide-in-top' : 'slide-in-top-final'}  ${fullWidth == 'blue' ? 'fullwidth' : ''}`}>
              <div className='sideletters'>
                    餐饮<div className="rotatedletter">Food</div>
                </div>
             
            </div>



            <div onClick={() => setfullWidth('red')} className={`red sidelinks ${fullSide && 'fullHeightSidebar'} ${test < 3 ? 'slide-in-top' : 'slide-in-top-final'} ${fullWidth == 'red' ? 'fullwidth' : ''}`}><div className='sideletters'>購物 <div className="rotatedletter">Retail</div></div></div>
            <div onClick={() => setfullWidth('yellow')} className={`yellow sidelinks ${fullSide && 'fullHeightSidebar'} ${test < 1 ? 'slide-in-top' : 'slide-in-top-final'} ${fullWidth == 'yellow' ? 'fullwidth' : ''}`}><div className='sideletters'>文化 <div className="rotatedletter">Community</div></div></div>
        </>
    )
}

