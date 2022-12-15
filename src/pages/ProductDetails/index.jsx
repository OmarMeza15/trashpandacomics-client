import React, { useEffect, useState } from 'react'
import SocialMediaLinks from '../../components/SocialMediaLinks'
import productService from '../../services/product.service'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const [details, setDetails] = useState({})
  const { id } = useParams()
  const { _id, imageUrl, title, price, info, description } = details

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
    <div>
      <div className='flex justify-center items-center gap-x-16 my-16'>
          <div className='w-1/3'>
            <img 
              src={imageUrl} 
              alt={title}
              className="object-cover"
              />
          </div>

          <div className="text-left w-1/3 p-5 shadow-lg">
            <h1 className="text-3xl">{title}</h1>
            <p className="opacity-50 text-sm">ID: {_id}</p>
            <p className="my-5 text-xl">${price}</p>

            <form className='flex flex-col'>
              <div className='flex items-center gap-x-8 pl-3'>
                <label className='text-left'>Quantity:</label>
                <input 
                type="number"
                className="w-1/4 rounded-lg"
                />
              </div>  
              <button className='bg-black text-white w-56 h-11 rounded-3xl font-light opacity-50 hover:opacity-100 transition ease-in-out duration-500 my-5'>
              Add to cart
              </button>
            </form>
            
            <p>Product info:</p>
            <p>{info}</p>
            <p className="mt-5">Description:</p>
            <p>{description}</p>
          </div>
      </div>

      <SocialMediaLinks />
    </div>
  )
}

export default ProductDetails