import Image from 'next/image'
import React from 'react'


const Footer = ({ secFoot }) => {


  return (
    <div className={`mt-60 mb-60 fade-in ${secFoot ? "" : 'mx-60-var'}`}>
      <div className="textcenter vendor">
        <div className='vendor-div'>
          <h4>Interested in becoming a vendor?</h4>

          <div className='white-button mx-auto ' style={{ top: 0, padding: '15px' }}>click here</div>
        </div>
      </div>
      {/*  */}

      <div className='mt-60 mb-60 flex main-grid textcenter soc-media-main-div'>
        <div className='grid-center-content soc-media-div hover-pointed-anim'>
          <div>
            <Image src='/images/pencil-icon.svg' alt='pencil-icon' height={29} width={29} />
            <p>Email us</p>
          </div>
        </div>


        <div className='grid-center-content soc-media-div hover-pointed-anim'>
          <div>
            <Image src='/images/facebook-icon.svg' alt='Facebook-icon' height={30} width={18} />
            <p>Follow us <br />on facebook</p>
          </div>
        </div>

        <div className='grid-center-content soc-media-div hover-pointed-anim'>
          <div>
            <Image src='/images/instagram-icon.svg' alt='Instagram-icon' height={25} width={25} />
            <p>Follow us <br />on instagram</p>
          </div>
        </div>

      </div>

      <div className="hover-pointed-anim main-grid flex email-div mb-30">

        <div className='none-760px'>
          <h5>Stay up to date <br /> with our newsletter</h5>
        </div>

        <div className="display-small textcenter">
          <div style={{ marginBottom: '5px' }}>
            <Image src='/images/email-icon.svg' alt='email-icon' height={20} width={33} />
          </div>
          <p>Get updates in your inbox</p>
        </div>

        <div className='email-div-email flex'>
          <div>Email</div>
          <div><Image src='/images/arrow-right.svg' alt='arrow-right-icon' height={20} width={20} /></div>
        </div>

      </div>

      <div className='flex main-grid copyright-div mt-50-sm'>
        <div className='flex main-grid'>
          <p>Copyright Canal Street Market 2019</p>
          <p>Privacy Policy</p>
          <p>Vendor Login</p>
        </div>
        <div className='flex copyright-Name'>
          <p>
            <a href="https://www.linkedin.com/in/agustin-mac-rae-3348ab216/">Site by Agustin Mac Rae</a>
          </p>
        </div>
      </div>


    </div>
  )
}

export default Footer