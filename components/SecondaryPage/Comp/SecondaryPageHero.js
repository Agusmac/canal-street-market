import React from 'react'
import Image from 'next/image'


const SecondaryPageHero = ({ color, img, title, jpletters, topText, menuArray }) => {


    return (
        <>
            <div className="flex main-grid fdsh mb-30">
                <div className='rotated-hero-div flex '>{topText[0]}
                    <div style={{ position: 'relative', bottom: '-4px', left: '15px' }}>
                        <Image src='/images/arrow-right.svg' alt='arrow-right-icon' height={20} width={20} />
                    </div>
                </div>
                <div className='text-right'>
                    <p>{topText[1]}</p>
                    <p>{topText[2]}</p>
                    <p>{topText[3] && topText[3]}</p>
                </div>
            </div>
            <div className="flex sdsh text-left">
                <div className={`${!menuArray && 'xl-title-fix'}`}><h1 >{title}</h1></div>
                <div>
                    <h2 className={`${menuArray ? 'text-right' : 'text-left text-right-sm'} z-i-1`}>{jpletters}</h2>
                    {<div className={`${!menuArray && 'no-display-to-flex'}`}>
                        <Image src={`/images/${img}`} alt='Food-market' height={506} quality={100} width={374} />
                    </div>}
                </div>
            </div>
        </>
    )
}

export default SecondaryPageHero