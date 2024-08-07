import React from 'react'
import './Footer.css'
import Facebook from '../../assets/facebook_icon.png';
import Instagram from '../../assets/twitter_icon.png'
import Twitter from '../../assets/instagram_icon.png'
import Youtube from '../../assets/facebook_icon.png'
function footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={Facebook} alt="" />
        <img src={Instagram} alt="" />
        <img src={Twitter} alt="" />
        <img src={Youtube} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relation</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preferences</li>
        <li> Corporate Information</li>
        <li>Contact Us</li>
        
      </ul>
      < p className='copyright-text'>@ 1997-2023 netflix,INC .</p>
    </div>
  )
}

export default footer