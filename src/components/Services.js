import React from 'react';
import serviceLogo from "../img/LogoB.png";
import conection from "../img/conection.png";
import config from "../img/config.png"

export const Services = () => {
  return (
    <div>
      {/* SERVICES */}
      <div className="section-4-1" id="services">
          <h1>SERVICES</h1>
      </div>
      <div className="section-4">
          <div className="box-1">
              <img src={serviceLogo} alt="Rockodeq"/>
              <h3>Empower Your Website</h3>

                  <p>Upgrade for Greater Impact</p>
                  <p>Landing page creation from scratch</p>
                  <p>Complete Website Makeovers</p>
                  <p>Major Design Revamps</p>
                  <p>Custom-Crafted Features (Online Store, Blog, etc.)</p>
                  <p>Major Website Software Enhancements</p>
                  <p>Rates Tailored to Project Complexity</p>

              <h4 className="pricing">Contact us</h4>

          </div>
          <div className="box-2">
              
              <img src={conection} alt="code"/>
              <h3>Update your website today!</h3>

                  <p>Web pages and custom forms</p>
                  <p>Quick content updates</p>
                  <p>Efficient bug/error correction</p>
                  <p>Comprehensive security review (SSL, login protections, etc.)</p>
                  <p>Website review and optimization</p>

              <p className="pricing">Just $89 per hour</p>
          </div>
          <div className="box-3">
              <img src={config} alt=""/>
              <h3>Continuous support</h3>
              
                  <p>Webmaster service</p>
                  <p>24/7 automated monitoring and alerts</p>
                  <p>A backup website with automatic failover</p>
                  <p>Dedicated support options (Short-term or long-term)</p>
                  <p>Monthly website checks, updates, optimization</p>
                  <p className="pricing">$50 to $200+ per month</p>
          </div>

       </div>
      </div>
 
)
}
