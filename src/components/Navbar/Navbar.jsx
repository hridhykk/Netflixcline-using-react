import React, { useRef,useEffect} from 'react'
import './Navbar.css'
import Logo  from '../../assets/logo.png'
import Search  from '../../assets/search-icon.png'
import Bellicon  from '../../assets/Bell-icon.png'
import Profile  from '../../assets/profile-icon.jpg';
import Dropdown  from '../../assets/dropdown-icon.png'
import { Logout } from '../../Firebase'

function Navbar() {

  const NavRef = useRef();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        NavRef.current.classList.add('nav-dark')
      }else{
        NavRef.current.classList.remove('nav-dark')
      }
    })
  },[])



  return (
    <div ref={NavRef} className='navbar'>
      <div className="navbar-left">
      <img className="logo" src={Logo} alt=""  />
      <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>new &popular</li>
        <li>mylist</li>
        <li>Browse By Languages</li>
      </ul>
        </div>
      <div className="navbar-right">
        <img className='search-icon' src={Search} alt="" />
        <p>Children</p>
        <img src={Bellicon} className='icon' alt="" />
        <div className="navbar-profile">
        <img src={Profile} className='profile-icon' alt="" />
        <img src={Dropdown} className='dropdown-icon' alt="" />
        <div className="dropdown">
         <p onClick={()=>{Logout()}}>Sign Out Of Netflix</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar