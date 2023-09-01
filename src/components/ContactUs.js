import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import logoR from '../img/LogoB.png'


export const ContactUs = () => {
  const form = useRef();
  const [message, setMessage] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_waeobus_rock', 'template_7y28g73', form.current, 'cMvWvZVLTDXiH7o3l')
      .then((result) => {
        console.log(result.text);
        setMessage(true);

      }, (error) => {
        console.log(error.text + " There was a problem, the message was not sent. Try again.");
      });
  };
  

  
  return (
    <div className='cont-contact' id='contact'>

      {/* CTA */}
      <div className="section-5">
        <p>Ready to take your brand to new heights?</p>
        <p>Contact us now, and let's make it happen!</p>
      </div >
      <div className='section-6'>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input className='button' type="submit" value="Send" />
        </form>
      </div>
     
          <div className={message === true ? "result-true" : "result-false"}>
            <img src={logoR} alt="rock" />
            <p>Thank you for your message, we will contact you as soon as possible</p>
          </div>
      


    </div>

  );
};