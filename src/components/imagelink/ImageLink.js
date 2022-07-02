import React from 'react'
import './imagelink.css'
import API_KEY  from '../../../keys';
const Clarifai = require('clarifai');
const app = new Clarifai.App({
  apiKey: {API_KEY}
 });
const ImageLink = () => {
  return (
    <div className='image-link'>
        <form className='form'>
          <label htmlFor="url"></label>
        
          
          <input 
          type="text"
          id='url'
          name='url'

          />
          <button type='submit' className='btn'>Generate</button>
         
          
        </form>
    </div>
  )
}

export default ImageLink