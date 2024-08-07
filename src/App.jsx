import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login'
import Player from './pages/player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const navigate = useNavigate();
  useEffect(()=>{
 onAuthStateChanged(auth,async (user)=>{
  if(user){
    console.log('loged in');
    navigate('/')
  }else{
    console.log('log out');
    navigate('/login')
  }
 })
  },[])
  return (
    <div> 
      <ToastContainer theme='dark' />
      <Routes>
        <Route  path='/' element={ <Home /> } />
        <Route  path='/login' element={ <Login /> } />
        <Route  path='/player/:id' element={ <Player /> } />
      </Routes>
     
    </div>
  )
}

export default App