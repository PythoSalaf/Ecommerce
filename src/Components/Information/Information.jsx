import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineRight } from "react-icons/ai";
import "./Information.css"


const Information = () => {
  return (
    <div className='info-page'>
        <h2 className="info-title"> Information</h2>
        <div className="info-list">
            <Link to={"/contact"} className='info-link'> <AiOutlineRight/> Delivery </Link>
            <Link to={"/contact"} className='info-link'> <AiOutlineRight/> Legal Notice </Link>
            <Link to={"/contact"} className='info-link'> <AiOutlineRight/> Secure Payment  </Link>
            <Link to={"/contact"} className='info-link'> <AiOutlineRight/> About us  </Link>
            <Link to={"/contact"} className='info-link'> <AiOutlineRight/> Contact  </Link>
        </div>
    </div>
  )
}

export default Information