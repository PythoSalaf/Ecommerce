import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Address.css'


const Address = () => {
    const navigate = useNavigate()
  return (
    <div className='address-page'>
        <h2 className='address-title' >Home address</h2>
        <div className="">
            <div className="address-name">
                <input type="text" placeholder='first Name' />
                <input type="text" placeholder='last Name' />
            </div>
            <div className="address-text">
                <input type="text" placeholder='Address' />
            </div>
            <div className="address-text">
                <input type="text" placeholder='Apartment, suit, etc (optional)' />
            </div>
            <div className="address-text">
                <input type="region" placeholder='state'/>
            </div>
            <div className="address-text">
                <input type="region" placeholder='city'/>
            </div>
        </div>
        <button className='checkout-btn' onClick={() => navigate('/cart')} >return to cart</button>
    </div>
  )
}

export default Address