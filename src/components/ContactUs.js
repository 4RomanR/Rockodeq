import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_waeobus_rock', 'template_7y28g73', form.current, 'cMvWvZVLTDXiH7o3l')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      {/* CTA */}
      <div className="section-5">
        <p>Ready to take your brand to new heights?</p>
        <p>Contact us now, and let's make it happen!</p>

      </div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>

    </div>

  );
};