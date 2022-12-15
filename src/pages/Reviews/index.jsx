import React, { useEffect, useState, useContext } from 'react'
import MakeReview from '../../components/MakeReview'
import SocialMediaLinks from '../../components/SocialMediaLinks'
import reviewService from '../../services/review.service'
import { AuthContext } from '../../context/auth.context'
import moment from 'moment'

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  const { user } = useContext(AuthContext)

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
      <div className='flex flex-col justify-center items-center'>

        <h1 className='text-4xl font-medium my-10'>REVIEWS</h1>
        <p className='font-light mb-10'>Take a look at what other people think of our work and leave your review too.</p>

        {/* Reviews */}
        <div className='border rounded-xl border-white text-left w-4/5'>
          {reviews.map(({ _id, createdAt, text, imageUrl, author }) => (
            <div key={_id}>
              <div className='flex justify-center items-center gap-x-20 py-12 hover:shadow-lg hover:shadow-white transition-shadow duration-500' key={ _id }>

                <div className='w-1/3'>
                  <h2 className='text-xl'>{author?.name}</h2>
                  <h3 className='font-light mb-5'>{ moment(createdAt).format('MMMM Do YYYY') }</h3>
                  <p>{ text }</p>
                </div>

                <div className='w-1/3 h-full flex justify-center'>
                  <img 
                    src={ imageUrl }
                    alt=""
                    className='object-cover'
                  />  
                </div>  

              </div>
            </div>
          ))}
        </div>

        {/* Make a review */}
        <div className='border border-white rounded-xl w-4/5'>  
          {/* Leave a review component */}
          <MakeReview getReviews={getReviews}/>
        </div>

      </div>  

      <SocialMediaLinks />
    </div>
  )
}

export default Reviews