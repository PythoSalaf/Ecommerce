import React from 'react'
import "./News.css"
const News = () => {
  return (
    <div className='news-container'>
      <h2 className='news-title'>News Letter</h2>
      <p className='news-text'>Gain access to 30% discount on any product  <br/> and join the vip list now</p>
      <input type="email" placeholder='Email' className='news-input' />
      <button className='sub-btn'>Subscribe</button>
    </div>
  )
}

export default News