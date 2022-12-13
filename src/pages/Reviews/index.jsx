import React, { useEffect, useState, useContext } from 'react'
import MakeReview from '../../components/MakeReview'
import SocialMediaLinks from '../../components/SocialMediaLinks'
import reviewService from '../../services/review.service'
import { AuthContext } from '../../context/auth.context'

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  const { user } = useContext(AuthContext)
  console.log(user)

  const getReviews = () => {
    reviewService
      .getAllReviews()
      .then((response) => {
        setReviews(response.data)
      })
      .catch(console.log)
  }

  useEffect(() => {
    getReviews()
  }, [])
 

  return (
    <div className='bg-black text-white'>
      <div className='flex flex-col justify-center items-center gap-20'>
        
        {/* Left text */}
        <div>  
          <h1 className='text-4xl font-medium mb-10'>REVIEWS</h1>
          <p className='font-light'>Take a look at what other people think of our work and leave your review too.</p>

          {/* Leave a review component */}
          <MakeReview getReviews={getReviews}/>
    
        </div>  

        {/* Reviews */}
        <div className='border rounded-xl border-white text-left w-2/3'>

          {reviews.map(({ _id, createdAt, text, imageUrl, author }) => (
            <div className='p-10 flex justify-center items-center gap-16' key={ _id }>
              <div>
                <h2 className='text-xl'>{author?.name}</h2>
                <h3 className='font-light mb-5'>{ createdAt }</h3>
                <p>{ text }</p>
              </div>

              <div>
                <img 
                  src={ imageUrl }
                  alt=""
                />  
              </div>  
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