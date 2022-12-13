import React from 'react'
import SocialMediaLinks from '../../components/SocialMediaLinks'

const ShopPage = () => {
  return (
    <div>
      
      <div className='h-screen grid grid-cols-4 place-items-center'>
        <div className='text-left hover:shadow-2xl transition-shadow duration-500'>
            <img 
                src='https://static.wixstatic.com/media/160c7a_f7a42565f7114e1d81e2636d94d29f2f~mv2.jpg/v1/fill/w_215,h_215,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/160c7a_f7a42565f7114e1d81e2636d94d29f2f~mv2.jpg'
                alt='comic strip'
            />
            <div className='py-5 pl-3'>
              <p>Comic Strip</p>
              <p>$65.00</p>
            </div>
        </div>

        <div className='text-left hover:shadow-2xl transition-shadow duration-500'>
            <img 
                src='https://static.wixstatic.com/media/160c7a_f7a42565f7114e1d81e2636d94d29f2f~mv2.jpg/v1/fill/w_215,h_215,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/160c7a_f7a42565f7114e1d81e2636d94d29f2f~mv2.jpg'
                alt='comic strip'
            />
            <div className='py-5 pl-3'>
              <p>Comic Strip</p>
              <p>$65.00</p>
            </div>
        </div>

        <div className='text-left hover:shadow-2xl transition-shadow duration-500'>
            <img 
                src='https://static.wixstatic.com/media/160c7a_f7a42565f7114e1d81e2636d94d29f2f~mv2.jpg/v1/fill/w_215,h_215,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/160c7a_f7a42565f7114e1d81e2636d94d29f2f~mv2.jpg'
                alt='comic strip'
            />
            <div className='py-5 pl-3'>
              <p>Comic Strip</p>
              <p>$65.00</p>
            </div>
        </div>

        <div className='text-left hover:shadow-2xl transition-shadow duration-500'>
            <img 
                src='https://static.wixstatic.com/media/160c7a_f7a42565f7114e1d81e2636d94d29f2f~mv2.jpg/v1/fill/w_215,h_215,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/160c7a_f7a42565f7114e1d81e2636d94d29f2f~mv2.jpg'
                alt='comic strip'
            />
            <div className='py-5 pl-3'>
              <p>Comic Strip</p>
              <p>$65.00</p>
            </div>
        </div>
      </div>

      <SocialMediaLinks />

    </div>
  )
}

export default ShopPage