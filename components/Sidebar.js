
import React, { useEffect, useState } from 'react'
import { foodDataArray, marketDataArray } from '../data'
import SecondaryPage from './SecondaryPage/SecondaryPage'


const sideArray = ['.yellow', '.red', '.blue']

export default function Sidebar({ fullWidth, setfullWidth,setOpenModal }) {


    const [test, settest] = useState(0)

    const [fullSide, setFullSide] = useState(false)

    const increase = () => {
        // console.log(test)
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
            <div onClick={() => setfullWidth('blue')} className={`blue sidelinks  ${fullSide && 'fullHeightSidebar'} ${test < 6 ? 'slide-in-top' : 'slide-in-top-final'}  ${fullWidth == 'blue' ? 'fullwidth flex total-display' : ''}`}>
                <div className={`sideletters ${fullWidth == 'blue' && 'side-letter-gone '}`}>餐饮<div className="rotatedletter">Food</div></div>
             
                {fullWidth == 'blue' && <SecondaryPage fullWidth={fullWidth} setOpenModal={setOpenModal} data={foodDataArray} color='blue' />}
                {/* two ways to toggle display, the first one probably runs better 
                as it does not render the component but the second one allows me for a much better animation
                 when leaving the page, handling it with with conditionals & classes
                  */}
                {/* <SecondaryPage fullWidth={fullWidth} color='blue' /> */}
            </div>



            <div onClick={() => setfullWidth('red')} className={`red sidelinks ${fullSide && 'fullHeightSidebar'} ${test < 3 ? 'slide-in-top' : 'slide-in-top-final'} ${fullWidth == 'red' ? 'fullwidth flex total-display' : ''}`}>
                <div className={`sideletters ${fullWidth == 'red' && 'side-letter-gone'}`}>購物 <div className="rotatedletter">Retail</div></div>
                {fullWidth == 'red' && <SecondaryPage fullWidth={fullWidth} setOpenModal={setOpenModal} data={marketDataArray} color='red' />}
            </div>


            <div onClick={() => setfullWidth('yellow')} className={`yellow sidelinks ${fullSide && 'fullHeightSidebar'} ${test < 1 ? 'slide-in-top' : 'slide-in-top-final'} ${fullWidth == 'yellow' ? 'fullwidth total-display' : ''}`}><div className='sideletters'>文化 <div className="rotatedletter">Community</div></div></div>
        </>
    )
}

