import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  { popularProduct } from "../ProductData"
import { ProductCard } from '../../../Components'
import { showMoreProducts } from '../../../Features/ProductSlice'
import "./Products.css"



const Products = () => {
 const dispatch = useDispatch()
const product = useSelector(state => state.products.displayedProduct) 
const handleShowmore = () => {
  dispatch(showMoreProducts())
}
  return (
    <div className='product-page'>
      <section className="">
        <h2 className="popular-title">popular products</h2>
       <div className="popular-container">
       {
          popularProduct.map((product) => (
            <div key={product.id} className='popular-cover'>
              <ProductCard {...product} />
            </div>
          ))
        }
       </div>
      </section>
      <section className="">
        <h2 className="more-title">more products</h2>
        <div className="more-products">
          {
            product.map((data) => {
              return <div key={data.id} className='more-product-container' >
                <ProductCard {...data} />
              </div>
            })
          }
        </div>
        <button type='button' className="show-more-btn" onClick={handleShowmore}>Show more</button>
      </section>
    </div>
  )
}

export default Products