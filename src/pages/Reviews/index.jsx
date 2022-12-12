import React from 'react'
import CommentModal from '../../components/CommentModal'
import SocialMediaLinks from '../../components/SocialMediaLinks'

const Reviews = () => {
  return (
    <div className='bg-black text-white'>
      <div className='flex flex-col justify-center items-center gap-20'>
        
        {/* Left text */}
        <div>  
          <h1 className='text-4xl font-medium mb-10'>REVIEWS</h1>
          <p className='font-light'>Take a look at what other people think of our work and leave your review too.</p>

          {/* Leave a review component */}
          <CommentModal />
    
        </div>  

        {/* Reviews */}
        <div className='border rounded-xl border-white text-left w-2/3'>
          <div className='p-10'>  
            <h2 className='text-xl'>Casey Lorimer</h2>
            <h3 className='font-light mb-5'>6 months ago</h3>
            <p>Rèka was absolutely fantastic. Her art and her professionalism were wonderful! She was so quick to respond to any and all messages I sent her, and was incredibly accommodating. She captured my dad's essence perfectly for the comic book cover of him I requested. (He loves sci-fi and Disney, he programs, and he is a New Zealander - AKA a kiwi!) I highly recommend her to anyone looking for a custom comic. Thank you so much, Rèka! :)</p>  
            <hr className='mt-5'/>
          </div>

          <div className='p-10'>  
            <h2>Casey Lorimer</h2>
            <h3>6 months ago</h3>
            <p>Rèka was absolutely fantastic. Her art and her professionalism were wonderful! She was so quick to respond to any and all messages I sent her, and was incredibly accommodating. She captured my dad's essence perfectly for the comic book cover of him I requested. (He loves sci-fi and Disney, he programs, and he is a New Zealander - AKA a kiwi!) I highly recommend her to anyone looking for a custom comic. Thank you so much, Rèka! :)</p>  
            <hr />
          </div>

          <div className='p-10'>  
            <h2>Casey Lorimer</h2>
            <h3>6 months ago</h3>
            <p>Rèka was absolutely fantastic. Her art and her professionalism were wonderful! She was so quick to respond to any and all messages I sent her, and was incredibly accommodating. She captured my dad's essence perfectly for the comic book cover of him I requested. (He loves sci-fi and Disney, he programs, and he is a New Zealander - AKA a kiwi!) I highly recommend her to anyone looking for a custom comic. Thank you so much, Rèka! :)</p>  
            <hr />
          </div>

          <div className='p-10'>  
            <h2>Casey Lorimer</h2>
            <h3>6 months ago</h3>
            <p>Rèka was absolutely fantastic. Her art and her professionalism were wonderful! She was so quick to respond to any and all messages I sent her, and was incredibly accommodating. She captured my dad's essence perfectly for the comic book cover of him I requested. (He loves sci-fi and Disney, he programs, and he is a New Zealander - AKA a kiwi!) I highly recommend her to anyone looking for a custom comic. Thank you so much, Rèka! :)</p>  
            <hr />
          </div>

          <div className='p-10'>  
            <h2>Casey Lorimer</h2>
            <h3>6 months ago</h3>
            <p>Rèka was absolutely fantastic. Her art and her professionalism were wonderful! She was so quick to respond to any and all messages I sent her, and was incredibly accommodating. She captured my dad's essence perfectly for the comic book cover of him I requested. (He loves sci-fi and Disney, he programs, and he is a New Zealander - AKA a kiwi!) I highly recommend her to anyone looking for a custom comic. Thank you so much, Rèka! :)</p>  
            <hr />
          </div>

          <div className='p-10'>  
            <h2>Casey Lorimer</h2>
            <h3>6 months ago</h3>
            <p>Rèka was absolutely fantastic. Her art and her professionalism were wonderful! She was so quick to respond to any and all messages I sent her, and was incredibly accommodating. She captured my dad's essence perfectly for the comic book cover of him I requested. (He loves sci-fi and Disney, he programs, and he is a New Zealander - AKA a kiwi!) I highly recommend her to anyone looking for a custom comic. Thank you so much, Rèka! :)</p>  
            <hr />
          </div>
        </div>

      </div>  

      <SocialMediaLinks />
    </div>
  )
}

export default Reviews