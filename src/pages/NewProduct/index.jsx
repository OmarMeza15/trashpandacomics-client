import React, { useState } from 'react'
import productService from '../../services/product.service'

const NewProduct = () => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [discount, setDiscount] = useState(false)
  const [imageUrl, setImageUrl] = useState("")

  const handleProductSubmit = (e) => {
    const requestBody = { title, price, imageUrl, discount }
    
    e.preventDefault()
    
    productService
      .createProduct(requestBody)
      .then(() => {
        setTitle("")
        setPrice("")
        setImageUrl("")
        setDiscount(false)
      })
      .catch(console.log)
  }

  const handleImageUpload = (e) => {
    const uploadData = new FormData()

    uploadData.append("imageUrl", e.target.files[0])

    productService
      .uploadImage(uploadData)
      .then((response) => setImageUrl(response.fileUrl))
      .catch(console.log)
  }

  return (
    <div className="bg-black text-white">

      <div className="h-screen flex flex-col justify-center items-center">
        <div className="w-1/2">
          <h1 className="text-4xl font-medium mb-10">Add a new Product to sell</h1>
        </div>

        <form onSubmit={handleProductSubmit} className="w-2/3">
          {/* Title input */}
          <label className="block mb-2 mt-10">Title:</label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
            </div>

            <input 
              type="text" 
              name="title" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Comic Book"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block        w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            />
          </div>

          {/* Price input */}
          <label className="block mb-2">Price:</label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path></svg>
            </div>

            <input 
              type="number" 
              name="price" 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="$52.00" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block       w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            />
          </div>

          <input 
            type="file"
            onChange={(e) => handleImageUpload(e)}
          />

          <div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
            <input 
            id="bordered-checkbox-1" 
            type="checkbox" 
            name="discount" 
            checked={discount}
            onChange={(e) => setDiscount(e.target.checked)} 
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

            <label className="py-4 ml-2 w-full text-sm font-medium dark:text-gray-300">
            Apply discount badge
            </label>
          </div>

          {/* Submit button */}
          <button
            className="bg-white text-black w-56 h-11 rounded-3xl font-light mt-10 hover:opacity-50 transition ease-in-out duration-500"
            type="submit"
            disabled={imageUrl === ""}>
              Comment
          </button>
        </form>
      </div>

    </div>
  )
}

export default NewProduct