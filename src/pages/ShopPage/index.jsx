import { Badge } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import SocialMediaLinks from '../../components/SocialMediaLinks'
import productService from '../../services/product.service'

const ShopPage = () => {
  const [products, setProducts] = useState([])

  const getProducts = () => {
    productService
      .getAllProducts()
      .then((response) => {
        setProducts(response.data)
      })
      .catch(console.log)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      
      <div className='flex flex-wrap justify-center items-center gap-x-20 gap-y-16 my-16 h-screen'>
        {products.map(({ _id, title, price, imageUrl, discount }) => (
          <div key={_id} className='shadow-2xl transition-shadow duration-500 w-72'>
              <div className='w-4/5 h-52 flex justify-center'>
                <img 
                  src={ imageUrl }
                  alt={ title }
                  className="object-cover"
                />
              </div>

              <div className='py-5 pl-3 flex flex-col text-center'>
                <p>{ title }</p>

                <div className='flex justify-center'>
                {discount ? (
                  <div className='flex justify-center items-center gap-1 px-2 py-1 text-xs font-bold text-red-100 bg-purple-800 opacity-80 rounded-full w-1/3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M4.93 1.31a41.401 41.401 0 0110.14 0C16.194 1.45 17 2.414 17 3.517V18.25a.75.75 0 01-1.075.676l-2.8-1.344-2.8 1.344a.75.75 0 01-.65 0l-2.8-1.344-2.8 1.344A.75.75 0 013 18.25V3.517c0-1.103.806-2.068 1.93-2.207zm8.85 5.97a.75.75 0 00-1.06-1.06l-6.5 6.5a.75.75 0 101.06 1.06l6.5-6.5zM9 8a1 1 0 11-2 0 1 1 0 012 0zm3 5a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>

                    <p>{ `$${ price }` }</p>
                  </div>
                ) : (
                  <p>{ `$${ price }` }</p>
                )}
                </div>
              </div>
          </div>
        ))}

      </div>

      <SocialMediaLinks />

    </div>
  )
}

export default ShopPage