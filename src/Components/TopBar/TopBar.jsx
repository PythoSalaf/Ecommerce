import React, { useState } from 'react'
import {  RiArrowDownSFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import "./TopBar.css"
const TopBar = () => {
    const [isOpen, setIsOpen ] = useState(false)
    const [changeCurrency, setChangeCurrency ] = useState(false)
    const [trackOrder, setTrackOrder] = useState(false)

   const toggleDropdown = () => {
    setIsOpen(!isOpen)
   }
   const toggleChangeOrder = () => {
    setTrackOrder(!trackOrder)
   }
   const togglePayment = () => {
    setChangeCurrency(!changeCurrency)
   }
   
  return (
    <div className='topbar'>
        <div className="topbar-container">
            <div className="topbar-left">
                <i className="">Refer Pytho-Hub to your friend and families and get 30% off your next order</i>
            </div>
            <div className="topbar-right">
                <div className="topbar-btn">
                    <button className='btn' onClick={toggleDropdown}>Need Help <RiArrowDownSFill/></button>
                    {
                        isOpen && (
                            <div className="topbar-dropdown">
                                <Link to={"/contact"} className='topbar-link' onClick={() => setIsOpen(!isOpen)} >Delivery</Link>
                                <Link to={"/contact"} className='topbar-link' onClick={() => setIsOpen(!isOpen)} >Legal notice</Link>
                                <Link to={"/contact"} className='topbar-link' onClick={() => setIsOpen(!isOpen)} >Secure payment</Link>
                            </div>
                        )
                    }
                </div>
                <div className="topbar-btn">
                <button className='btn' onClick={toggleChangeOrder} >Track Order <RiArrowDownSFill/></button>
                {
                    trackOrder && (
                        <div className="topbar-dropdown">
                            <Link to={"/contact"} className='topbar-link' onClick={() => setTrackOrder(!trackOrder)} >Order history</Link>
                            <Link to={"/contact"} className='topbar-link' onClick={() => setTrackOrder(!trackOrder)} >Order state</Link>
                        </div>
                    )
                }
                </div>
                <div className="topbar-btn">
                <button className='btn' onClick={togglePayment} ># NGN <RiArrowDownSFill/></button>
                {
                    changeCurrency && (
                        <div className="topbar-dropdown">
                          <Link className='topbar-link' onClick={() => setChangeCurrency(!changeCurrency)}>$ USDT</Link>

                        </div>
                    )
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopBar