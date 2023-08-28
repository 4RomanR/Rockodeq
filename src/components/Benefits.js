import React from 'react'
import imgBeneficios from "../img/top2.png"

export const Benefits = () => {
  return (
    <div>
         {/* BENEFICIOS */}
      <div className="section-3-1">
          <h1>Top Reasons to Opt for Our Services</h1>
      </div>
      <div className="section-3">
          <div>
              <img src={imgBeneficios} alt="web"/>
              <h3>Make Your Online Presence Shine</h3>
              <p>Whether it's a brand-new website or a redesign, I'll ensure your site looks stunning and functions seamlessly on all devices.</p>
              
          </div>
          <div>
              <img src={imgBeneficios} alt="landing"/>
              <h3>Efficient Solutions & Enhancements</h3>
              <p>If you have specific issues or need minor updates or improvements, I'm here to lend a hand, always with a positive attitude.</p>
          </div>
          <div>
              <img src={imgBeneficios} alt="landing"/>
              <h3>Flexible Pricing Options</h3>
              <p>I'm happy to work with your preferences. My straightforward approach ensures affordability and simplicity.</p>
          </div>
          <div>
              <img src={imgBeneficios} alt="landing"/>
              <h3>Reliable and Responsive Assistance</h3>
              <p>When you need someone ready to help at any moment, you can rely on me as if I were part of your team.</p>
          </div>

      </div>
      <hr/>
    </div>
  )
}
