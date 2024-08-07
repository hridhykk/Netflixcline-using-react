import React from 'react'
import './Home.css'
import Navbar  from '../../components/Navbar/Navbar';
import  Herobanner  from "../../assets/hero_banner.jpg"
import  Herotitle from "../../assets/hero_title.png";
import  Playicon from "../../assets/play_icon.png";
import  Infoicon from "../../assets/info_icon.png"
import Titlecard from '../../components/TitleCards/Titlecard';
import Footer from '../../components/Footer/Footer';
function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={Herobanner} className='banner-img' alt="banner-img" />
        <div className="hero-caption">
          <img src={Herotitle} alt="" className='caption-img'/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy</p>
          <div className="hero-btns">
            <button className='btn'> <img src={Playicon} alt="" />Play</button>
            <button className='btn dark-btn'> <img src={Infoicon} alt="" /> more info</button>

          </div>
          <Titlecard />
        </div>
      </div>
      <div className="more-cards">
      <Titlecard  title={"blockbuster movies"} category={'top_rated'}/>
      <Titlecard title={"Only on netflix"} category={'popular'}/>
      <Titlecard title={"upcoming"} category={'upcoming'}/>
      <Titlecard title={"Only for you"} category={'now_playing'}/>
      </div>
      < Footer />
    </div>
  )
}

export default Home

