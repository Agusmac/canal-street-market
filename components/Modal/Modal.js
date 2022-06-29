import React, { useEffect, useState } from 'react'

const Modal = ({ fullWidth, setfullWidth, openModal, setOpenModal }) => {


    const [first, setfirst] = useState()
    useEffect(() => {

    }, [])

    function changer(color) {
        setfullWidth(color)
        setOpenModal(prev => !prev)
    }

    return (
        <div className={`modal textcenter ${!openModal ? 'op-0 z-i--1' : 'op-1'}`} >
            <div className='flex h-45vh '>
                <div className='bg-white' onClick={() => changer("main")}><p className='rot-45-left'>About</p></div>
                <div className={`bg-lightblue`} onClick={() => changer("blue")}><p className='rot-45-right'>Food</p></div>
            </div>
            <div className='flex h-45vh '>
                <div className={`bg-red`} onClick={() => changer("red")}><p className='rot-45-right'>Retail</p></div>
                <div className={`bg-yellow`} onClick={() => changer("yellow")}><p className='rot-45-left'>Community</p></div>
            </div>
            <div className='grid-center-content h-10vh bg-white'>Become a vendor</div>
        </div>
    )
}

export default Modal