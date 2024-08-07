import React, {useState, useEffect } from 'react'
import './Player.css';
import Backarrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';
function Player() {
  const {id} = useParams()
  const navigate = useNavigate()
  const [apidata,setapidata] = useState({name:'',key:'',published_at:'',typeof:''})
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODE2MzYzNjNjNmY2OWUxNjZkMjMzNjJmZTdmMWNlZiIsIm5iZiI6MTcyMjY3MDcxNi44OTczMTQsInN1YiI6IjY2YWRkYzQ4MzdjMjc4ZDYyYWJkNzI2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WIjlfd5sJxWTNVsKuVpVRJ0kLF9r0niCZ6Edafzx2gU'
    }
  };
 useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(response => response.json())
  .then(response => setapidata(response.results[0]))
  .catch(err => console.error(err));
 },[])
 
  return (
    <div className='player '>

      <img src={Backarrow} alt="" onClick={()=>{navigate(-2)}} />
      <iframe width='90%' height='90%' src={`http://www.youtube.com/embed/${apidata.key}`} title='song' frameBorder='0' allowFullScreen ></iframe>
       <div className="played-info">
        <p>{apidata.published_at.slice(0,10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
       </div>
    </div>
  )
}

export default Player