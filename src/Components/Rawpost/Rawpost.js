import axios from '../../axios'
import React,{useState,useEffect} from 'react'
import { API_KEY } from '../../constant/constant'
import './Rawpost.css'
import {imageUrl} from '../../constant/constant'
import Youtube from 'react-youtube'
function Rawpost(props) {
  const [movies,setMovies]=useState([])
  const [urlid,setUrlid]=useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
      setMovies(response.data.results)
    })
  
   
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
    
      const movieId=(id)=>{
      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
         setUrlid(response.data.results[0])
         console.log(response.data.results)
      })
      }
    
  
  return (
    <div className='raw'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
        <img onClick={()=>movieId(obj.id)}className={props.isSmall?'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
      )}
        </div>
       { urlid&&<Youtube videoId={urlid.key} opts={opts}  /> }
     </div>
  )
}
export default Rawpost