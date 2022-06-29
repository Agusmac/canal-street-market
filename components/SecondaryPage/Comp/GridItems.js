import Image from 'next/image'
import React, { useState, useEffect } from 'react'


const GridItems = ({ name, description, img, w, h, folder }) => {

    console.log()
    const [random, setRandom] = useState(0)
    const [mouseOn, setMouseOn] = useState(false)
    // const [posNeg, setPosNeg] = useState('+')
    useEffect(() => {
        if (mouseOn) {
            setRandom(Math.floor(Math.random() * 80))
            // if (random % 2 == 0) {
            //     setPosNeg('-')
            // } else {
            //     setPosNeg('+')
            // }
        }
        // console.log(posNeg + (random + 100))
    }, [mouseOn])

    // function stopPropagation(e) {
    //     // e.stopPropagation();
    //     setMouseOn(true)
    // }

    return (
        <div onMouseEnter={() => setMouseOn(true)}
            onMouseLeave={() => setMouseOn(false)} className='flex-md'>
            <div>
                <p>{description}</p>
                <h5>{name}</h5>
            </div>
            <div className={`random-img-div op-0 ${mouseOn && 'op-1'} total-no-display-md`}
                style={{ marginTop: `${(random * 1.6) - 225}px`, marginLeft: random, }}>
                <Image src={`/images/${folder}/${img}`} alt={name} quality={100} height={h} width={w} />
            </div>
            <div className='display-md'>
                <Image src={`/images/${folder}/${img}`} alt={name} quality={100} height={h} width={w} />
            </div>
        </div>
    )
}

export default GridItems