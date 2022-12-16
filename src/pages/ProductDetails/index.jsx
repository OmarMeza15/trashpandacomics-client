import React, { useContext, useEffect, useState } from 'react'
import SocialMediaLinks from '../../components/SocialMediaLinks'
import productService from '../../services/product.service'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'

const ProductDetails = () => {
  const [details, setDetails] = useState({})
  const [quantity, setQuantity] = useState("")
  const { id } = useParams()
  const { _id, imageUrl, title, price, info, description } = details

  const { user, isLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const getAllDetails = () => {
    productService
      .getProductDetails(id)
      .then((response) => {
        setDetails(response.data)
      })
      .catch(console.log)
  }

  const deleteProduct = () => {
    productService
      .deleteOne(id)
      .then(navigate("/shop"))
      .catch(console.log)
  }

  useEffect(() => {
    getAllDetails()
  }, [])

  const handleCartSubmit = (e) => {
    const requestBody = {quantity: quantity, author: user._id, product: details}

    e.preventDefault()

    productService
      .addToCart(id, requestBody)
      .catch(console.log)
  }

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

            {/* Form to add to the cart */}
            <form onSubmit={handleCartSubmit} className='flex flex-col'>
              <div className='flex items-center gap-x-8 pl-3'>
                <label className='text-left'>Quantity:</label>
                <input 
                type="number"
                name='quantity'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-1/4 rounded-lg"
                />
              </div>

              <button 
                type='submit' 
                className='bg-black text-white w-56 h-11 rounded-3xl font-light opacity-50 hover:opacity-100 transition ease-in-out duration-500 my-5'
                >
              Add to cart
              </button>
            </form>
            
            <p>Product info:</p>
            <p>{info}</p>
            <p className="mt-5">Description:</p>
            <p>{description}</p>

            {isLoggedIn && (
              <div>
              {user.roles === "Admin" && (
                <div className='my-5 text-center'>
                  {/* Edit button */}
                  <Link to={`/shop/${_id}/details/edit`}>
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:text-purple-700">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                      </svg>
                    </button>
                  </Link>
                  
                  {/* Delete button */}
                  <button onClick={deleteProduct}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:text-red-600 ml-3">
                      <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
              </div>
            )}
          </div>

      </div>

      <SocialMediaLinks />
    </div>
  )
}

export default ProductDetails