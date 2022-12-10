import React from 'react'
import SocialMediaLinks from '../../components/SocialMediaLinks'

const About = () => {
  return (
    <div className='h-screen'>

      <div className='flex'>
        <img 
            src='https://static.wixstatic.com/media/160c7a_83374f0d287145fd8d2606fb64e90f16~mv2.jpg/v1/fill/w_852,h_768,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/160c7a_83374f0d287145fd8d2606fb64e90f16~mv2.jpg'
            alt='comic book'
        />

        <div className='flex flex-col justify-center text-left px-20'>
            <h1 className='font-semibold text-xl'>TRASHPANDACOMIC</h1>
            <h2 className='font-normal my-6'>Hassle-free comic book commissions</h2>
            <p className='font-light leading-relaxed'>Trashpandacomic is a small, independent business where customer satisfaction is a top priority. We believe in quality over quantity, this is why we're operating with one highly skilled artist who guides each client through the process personally. The moment you submit a form, you'll be connected to Reka, our experienced comic book illustrator, who will assist you with starting out, creating a brief, gathering necessary files, and help you through each step of the process. She'll be in contact with you from start to finish and you can count on her speedy reply any day of the week.</p>
        </div>
      </div>

      <SocialMediaLinks />
    </div>
  )
}

export default About