import { About } from "./components/About";
import { Benefits } from "./components/Benefits";
import { Services } from "./components/Services";
import { ContactUs } from "./components/ContactUs";
import { Hero } from "./components/Hero";

function App() {


  return (
    <div>
      {/* HERO */}
      <Hero/>
      
      {/* ABOUT */}
      <About />

      {/* BENEFITS */}
      <Benefits />

      {/* SERVICES */}
      <Services />
      
      {/* CONTACT */}
      <ContactUs />
     
      <footer>
        <p>© Rockodeq Website Services. 2023</p>
        <p>+1 (980) 228-0718</p>
      </footer>
    </div>
  );
}

export default App;
