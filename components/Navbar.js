import React, { useState } from 'react'
import Image from 'next/image'

const Hamburguer = "/images/icon-hamburger.svg"
const Cross = "/images/icon-close.svg"


export default function Navbar({ fullWidth }) {


    const [expanded, setExpanded] = useState(false)


    return (
        <div className={`navbar flex between ${fullWidth == 'main' ? 'mx-60-var' : ' px-5'}`} >
            <div className='img-div'><Image src='/image.svg' alt='Canal-Street-logo' height={60} width={60} quality={100} /></div>

           
                <div className={`burguer ${expanded ? "" : "wobble-ver-right"}`} onClick={() => setExpanded(!expanded)}>
                    {expanded ? <Image src={Cross} alt="paperpillar Icon" width={23.6} height={25} />
                        : <Image src={Hamburguer} alt="paperpillar Icon" width={28.6} height={25} />}
                </div>
          
        </div>
    )
}

