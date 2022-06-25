import Image from 'next/image'
import React from 'react'


const Footer = () => {
  return (
    <div className='mx-60-var mt-60 mb-60'>
      <div className="textcenter vendor">
        <div className='vendor-div'>
          <h4>Interested in becoming a vendor?</h4>

          <div className='white-button mx-auto ' style={{ top: 0, padding: '15px' }}>click here</div>
        </div>
      </div>
      {/*  */}

      <div className='mt-60 mb-60 flex main-grid textcenter'>
        <div className='grid-center-content soc-media-div hover-pointed-anim'>
          <div>
            <Image src='/images/pencil-icon.svg' height={29} width={29} />
            <p>Email us</p>
          </div>
        </div>


        <div className='grid-center-content soc-media-div hover-pointed-anim'>
          <div>
            <Image src='/images/facebook-icon.svg' height={30} width={18} />
            <p>Follow us <br />on facebook</p>
          </div>
        </div>

        <div className='grid-center-content soc-media-div hover-pointed-anim'>
          <div>
            <Image src='/images/instagram-icon.svg' height={25} width={25} />
            <p>Follow us <br />on instagram</p>
          </div>
        </div>

      </div>

      <div className="hover-pointed-anim main-grid flex email-div">

        <div className='none-760px'>
          <h5>Stay up to date <br /> with our newsletter</h5>
        </div>

        <div className="display-small textcenter">
          <div style={{ marginBottom: '5px' }}>
            <Image src='/images/email-icon.svg' height={20} width={33} />
          </div>
          <p>Get updates in your inbox</p>

        </div>


        <div className='email-div-email flex'>
          <div>Email</div>
          <div><Image src='/images/arrow-right.svg' height={20} width={20} /></div>
        </div>

      </div>

    </div >
  )
}

export default Footer