import React, { useState } from 'react';
import './Login.css'
import Logo from '../../assets/logo.png'
import { login,signup } from '../../Firebase';
import { useNavigate } from 'react-router-dom';
// import Spinner from '../../assets/netflix_spinner.gif'
function Login() {
  const [signstate,setsignstate] = useState('Sign In');
  const [name,setname] = useState('');
  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');
  // const [loading,setloading] = useState('fale');
  const navigate = useNavigate();
  
  const user_auth =async (event)=>{
  event.preventDefault();
  // setloading('true')
  if(signstate==='Sign In'){
    await login(email,password);
  }else{
    await signup(name,email,password);
    navigate('/login');
  }
  // setloading(false)
}
  return (
  //  loading? <div className="login-spinner"> <img src={Spinner} alt="" /></div>:
    <div className='login'>
      <img src={Logo} className='login-logo' alt="" />
       <div className="login-form">
        <h1>{signstate}</h1>
        <form >
          {signstate==='Sign Up'?<input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Your Name' />:<></>}
         
          <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='Email' />
          <input type="password"  value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='password'/>
          <button onClick={user_auth} type='submit' >{signstate}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor=''>Remember Me</label>
            </div>
            <p>Need Hepl</p>
          </div>
        </form>
        <div className="form-switch">
          {signstate=='Sign In'?<p>New to Netflix? <span onClick={()=>{setsignstate('Sign Up')}}>Sign up Now</span></p>:<p>Already have account<span onClick={()=>{setsignstate('Sign In')}} >Sign In Now</span></p>}
          
         
        </div>
       </div>
    </div>
  )
}

export default Login