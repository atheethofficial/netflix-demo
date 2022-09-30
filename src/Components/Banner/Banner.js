import React from 'react'
import './Banner.css'
import {useEffect,useState} from 'react'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constant/constant'
function Banner() {
      const [movie,setMovie]=useState()
      useEffect(()=>{
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
        setMovie(response.data.results[0])
      }).catch(err=>{
        alert('network Error')
      })
      },[])
  return (
    <div 
    style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?movie.original_title:""}</h1>
            <button className='buttons' >Play</button>
            <button className='buttons'>My List</button>
            <h1 className='description'>{movie?movie.overview:""}</h1>
        </div>
      <div className="fade"></div>

    </div>
  )
}

export default Banner