import logoRockodeq from "./img/LogoB.png";
import imgBeneficios from "./img/top2.png"
import serviceLogo  from "./img/LogoB.png"
import conection from "./img/conection.gif"
import config from "./img/config.png"
function App() {


  return (
    <div>
      {/* HERO */}
      <div className="section-1">
          <header>
              <div>
                  <img src={logoRockodeq} alt="rock"/>
              </div>
              <ul>
                  <li><a href="/#services">Services</a></li>
                  <li><a href="./services.html">About</a></li>
                  <li><a href="/#Contact">Contact</a></li>
              </ul>
              <img className="bi bi-list" src={require("./img/list.svg").default} alt="rock"/>
          </header>
          <div className="section-1-div" href="#Contact">
              <h1>Get your dream website!</h1>
              <h1>I'll help you.</h1>
              <a href="/#Contact"><button className="button-contact">CONTACT</button></a>
          </div>       
      </div>


      {/* PRESENTATION */}
      <div className="section-2">

          <div>
              <img src={logoRockodeq} alt="rock"/>
          </div>
          <div>
              <p>We craft stunning and functional visual experiences that take your brand to the next level. Our team comprises developers skilled in various languages, and graphic designers specialized in UX/UI, capable of creating everything from logos and badges to unique and customized websites.</p>
          </div>
          
      </div>
      <hr/>
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
      {/* SERVICES */}

      <div className="section-4-1" id="services">
          <h1>SERVICES</h1>
      </div>
      <div className="section-4">
          <div className="box-1">
              <img src={serviceLogo} alt="Rockodeq"/>
              <h3>Empower Your Website</h3>

                  <p>Upgrade for Greater Impact</p>
                  <p>Complete Website Makeovers</p>
                  <p>Major Design Revamps</p>
                  <p>Custom-Crafted Features (Online Store, Blog, etc.)</p>
                  <p>Major Website Software Enhancements</p>
                  <p>Rates Tailored to Project Complexity</p>

              <p className="pricing">Contact Us to Discuss Your Goals</p>

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
          {/* CTA */}
      <div className="section-5">
          <p>Ready to take your brand to new heights?</p>
          <p>Contact us now, and let's make it happen!</p>  
          
      </div>
      {/*      
      <div className="section-6" id="Contact"/>
       <form action={"https://formsubmit.co/8183967acbf0ea62eb24f45f98cb5253"} method={"POST"}>
              
              <input type="text" name="name" required placeholder="Name" className="input-box"></input>
              <input type="email" name="email" required placeholder="Email" className="input-box"></input>
              <textarea name="name" id="" cols="1" rows="5" placeholder="Message" className="input-box" required></textarea>
              <button type="submit">Send</button>
              <input type="hidden" name="_next" value="http://127.0.0.1:5500/index.html"></input>
              <input type="hidden" name="_captcha" value="false"></input>
              <input type="hidden" name="_template" value="basic"></input>          
            </form>

      </div>
  */}
      <footer>
          <p>© Rockodeq Website Services. 2023</p>
          <p>+1 (980) 228-0718</p>

      </footer>
    </div>
  );
}

export default App;
