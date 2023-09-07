import React, { useState } from 'react';
import logoRockodeq from "../img/LogoB.png";
import list from "../img/list.svg"

export const Hero = () => {
const [clicked, setClicked] = useState(false)
const toggleNav = () =>{
  setClicked( !clicked)
}
  return (
    <div>

      {/* HERO */}
      <div className="section-1">
        <header>
          <div>
            <img src={logoRockodeq} alt="rock" />
          </div>

          <img className='h-img' src={list} onClick={ toggleNav }/>
            <ul className={`header ul ${clicked ? "isActive" : "isDeactive"} `}>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>          
        </header>
        <div className="section-1-div" href="#Contact">
          <h1>Get your dream website!</h1>
          <h1>I'll help you.</h1>
          <a href="/#contact"><button className="button-contact">CONTACT</button></a>
        </div>
      </div>
    </div>
  )
}
 