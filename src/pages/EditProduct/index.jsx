import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productService from '../../services/product.service'

const EditProduct = () => {
    const [details, setDetails] = useState({})
    const { id } = useParams()
    const { imageUrl, title, price, info, description, discount } = details

    const [newTitle, setNewTitle] = useState(title)
    const [newPrice, setNewPrice] = useState(price)
    const [newDiscount, setNewDiscount] = useState(discount)
    const [newImageUrl, setNewImageUrl] = useState(imageUrl)
    const [newInfo, setNewInfo] = useState(info)
    const [newDescription, setNewDescription] = useState(description)

  
    const handleEditSubmit = (e) => {
      const requestBody = { title: newTitle, price: newPrice, imageUrl: newImageUrl, discount: newDiscount, info: newInfo, description: newDescription }

      e.preventDefault()
      
      productService
        .updateOne(id, requestBody)
        .then(() => {
          setNewTitle("")
          setNewPrice("")
          setNewImageUrl("")
          setNewDiscount(false)
          setNewInfo("")
          setNewDescription("")
        })
        .catch(console.log)
    }
  
    const handleImageUpload = (e) => {
      const uploadData = new FormData()
  
      uploadData.append("imageUrl", e.target.files[0])
  
      productService
        .uploadImage(uploadData)
        .then((response) => setNewImageUrl(response.fileUrl))
        .catch(console.log)
    }

    const getAllDetails = () => {
        productService
          .getProductDetails(id)
          .then((response) => {
            setDetails(response.data)
          })
          .catch(console.log)
      }
    
    useEffect(() => {
      getAllDetails()
    }, [])

    return (
        <div className="bg-black text-white h-full">
    
          <div className="flex flex-col justify-center items-center pb-16">
            <div className="w-1/2 mt-10">
              <h1 className="text-4xl font-medium mb-10">Edit</h1>
            </div>
    
            <form onSubmit={handleEditSubmit} className="w-2/3">
              {/* Title input */}
              <label className="block mb-2 mt-5">Title:</label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                </div>
    
                <input 
                  type="text" 
                  name="title" 
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Comic Book"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                />
              </div>
    
              {/* Info input */}
              <label className="block mb-2 mt-10">Info:</label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-500">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                  </svg>
                </div>
    
                <input 
                  type="text" 
                  name="info" 
                  value={newInfo}
                  onChange={(e) => setNewInfo(e.target.value)}
                  placeholder="Comic Book"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block        w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                />
              </div>
    
              {/* Description input */}
              <label className="block mb-2 mt-10">Description:</label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-500">
                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                  </svg>
                </div>
    
                <input 
                  type="text" 
                  name="description" 
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Comic Book"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block        w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                />
              </div>
    
              {/* Price input */}
              <label className="block mb-2 mt-10">Price:</label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path></svg>
                </div>
    
                <input 
                  type="number" 
                  name="price" 
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  placeholder="$52.00" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block       w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                />
              </div>
    
              <div className='flex justify-center items-center mb-2 mt-14 gap-20'>
              {/* Discount checkbox */}
              <div className="flex items-center pl-4 rounded border border-gray-200 w-1/4">
                <input 
                id="bordered-checkbox-1" 
                type="checkbox" 
                name="discount" 
                checked={newDiscount}
                onChange={(e) => setNewDiscount(e.target.checked)} 
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    
                <label className="py-4 ml-2 w-full text-sm font-medium dark:text-gray-300">
                Apply discount badge
                </label>
              </div>
    
              {/* Upload image input */}
              <input 
                type="file"
                onChange={(e) => handleImageUpload(e)}
                className="w-1/3 border border-gray-800"
              />
              
              {/* Submit button */}
              <button
                className="bg-white text-black w-56 h-11 rounded-3xl font-light hover:opacity-50 transition ease-in-out duration-500"
                type="submit"
                disabled={imageUrl === ""}
                >
                  Edit
              </button>
              </div>
    
            </form>
          </div>
    
        </div>
      )
}

export default EditProduct