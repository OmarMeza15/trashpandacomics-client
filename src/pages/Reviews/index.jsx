import React, { useEffect, useState } from 'react'
import CommentModal from '../../components/CommentModal'
import SocialMediaLinks from '../../components/SocialMediaLinks'
import reviewService from '../../services/review.service'

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    reviewService
      .getAllReviews()
      .then((response) => {
        setReviews(response.data)
      })
      .catch(console.log)
  }, [])
 

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

          {reviews.map(({ _id, createdAt, text }) => (
            <div className='p-10' key={ _id }>  
              <h2 className='text-xl'>Casey Lorimer</h2>
              <h3 className='font-light mb-5'>{ createdAt }</h3>
              <p>{ text }</p>  
              <hr className='mt-5'/>
            </div>
          ))}

        </div>

      </div>  

      <SocialMediaLinks />
    </div>
  )
}

export default Reviews