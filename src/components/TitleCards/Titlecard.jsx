import React, { useRef,useEffect, useState } from 'react'
import './Titlecard.css'
import { Link } from 'react-router-dom';
import Cardsdata from '../../assets/cards/Cards_data'


function Titlecard({title,category}) {
  const [apidata,setapidata] = useState([])
  const CardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODE2MzYzNjNjNmY2OWUxNjZkMjMzNjJmZTdmMWNlZiIsIm5iZiI6MTcyMjY3MDcxNi44OTczMTQsInN1YiI6IjY2YWRkYzQ4MzdjMjc4ZDYyYWJkNzI2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WIjlfd5sJxWTNVsKuVpVRJ0kLF9r0niCZ6Edafzx2gU'
    }
  };
  
  
const handleWheel = (event)=>{
  event.preventDefault();
  CardsRef.current.scrollLeft += event.deltaY;
}
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setapidata(response.results))
    .catch(err => console.error(err));
CardsRef.current.addEventListener('wheel',handleWheel)
},[])

  return (
   <div className="titlecard">
    <h2>{title?title:'Popular On Netflix'}</h2>
    <div className="card-list" ref={CardsRef}>
      {apidata.map((card,index)=>{
       return <Link to={`/player/${card.id}`} className="card" key={index}> <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
       <p>{card.original_title}</p>
        </Link>
      })}
    </div>
   </div>
  )
}

export default Titlecard