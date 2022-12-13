import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import reviewService from '../../services/review.service'

const MakeReview = ({getReviews}) => {
  const [text, setText] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const { user } = useContext(AuthContext)


  const handleReviewSubmit = (e) => {
    const requestBody = { text, imageUrl, author: user._id }
    
    e.preventDefault()
    
    reviewService
      .createReview(requestBody)
      .then(() => getReviews())
      .catch(console.log)
  }

  const handleImageUpload = (e) => {
    const uploadData = new FormData()

    uploadData.append("imageUrl", e.target.files[0])

    reviewService
      .uploadImage(uploadData)
      .then((response) => setImageUrl(response.fileUrl))
      .catch(console.log)
  }
  return (
    <div>
        <div className="relative p-6">
            <form onSubmit={handleReviewSubmit}>
              
              {/* Comment input */}
              <label className="block mb-2">Comment:</label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path></svg>
                </div>
              
                <input 
                  type="text" 
                  name="text" 
                  value={text} 
                  onChange={(e) => setText(e.target.value)} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <input 
                type="file"
                onChange={(e) => handleImageUpload(e)}
              />

              {/* Button */}
              <div className="pb-10">
                <button
                  className="bg-white text-black w-36 h-11 rounded-3xl font-light mt-10 hover:opacity-50 transition ease-in-out duration-500"
                  type="submit"
                  disabled={imageUrl == ""}
                >
                  Comment
                </button>
              </div>

            </form>
        </div>
    </div>
  )
}

export default MakeReview