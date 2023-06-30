import React from 'react'
import { Link } from 'react-router-dom'
import "./Brand.css"

const Brands = () => {
  return (
    <div className='brands' >
        <h2 className='brand-title'>Search by brands</h2>
        <div className="brand-list">
            <Link className='brand-link'>Apple</Link>
            <Link className='brand-link'>Samsung</Link>
            <Link className='brand-link'>HP</Link>
            <Link className='brand-link'>Dell</Link>
            <Link className='brand-link'>Assus</Link>
            <Link className='brand-link'>Acer</Link>
            <Link className='brand-link'>Google</Link>
        </div>
    </div>
  )
}

export default Brands