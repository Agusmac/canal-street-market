import React from 'react'
import Image from 'next/image'


const SecondaryPageHero = ({ color }) => {
    return (
        <>


            <div className="flex main-grid fdsh mb-30">
                <div className='rotated-hero-div flex '>Food
                    <div style={{ position: 'relative', bottom: '-4px', left: '15px' }}>
                        <Image src='/images/arrow-right.svg' alt='arrow-right-icon' height={20} width={20} />
                    </div>
                </div>
                <div className='text-right'>
                    <p>Food Hall Hours:</p>
                    <p>Mon - Thurs: 11:00AM - 6:00PM</p>
                    <p>Fri - Sun: 11:00AM - 7:00PM</p>
                </div>
            </div>
            <div className="flex sdsh text-left">
                <div><h1>The Food Hall</h1></div>
                <div>
                    <h2 className='text-right z-i-1'>餐饮</h2>
                    <div>
                        <Image src='/images/home_page_three.avif' alt='Food-market' height={506} quality={100} width={374} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondaryPageHero