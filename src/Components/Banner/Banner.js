import React from 'react';
import {useEffect} from 'react';
import axios from '../../axios';
import {API_KEY} from '../../constants/constants';
import './Banner.css';

function Banner() {
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
      console.log(Response.data.results[0]);
    })
  
  }, [])
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Money Hiest</h1>
            <div className='banner-buttons'>
                <button className='button'>play</button>
                <button className='button'>my list</button>
            </div>
            <h1 className='description'>the moving image. Cinema, in that sense, stands at the intersection of art and technology like nothing else. As an art form it would not exist without the technology required to capture the moving image.</h1>
        </div>
        <div className="fade_bottom">
          
        </div>
    
      
    </div>
  )
}

export default Banner 
