import logoRockodeq from "./img/LogoB.png";
import serviceLogo  from "./img/LogoB.png"
import conection from "./img/conection.gif"
import config from "./img/config.png"
import { About } from "./components/About";
import { Benefits } from "./components/Benefits";
import { Services } from "./components/Services";
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

       
      {/* ABOUT */}      
        <About/>

      {/* BENEFITS */}       
        <Benefits/>
      
      {/* SERVICES */}
    <Services/>

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
