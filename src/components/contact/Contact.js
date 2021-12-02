import emailjs from "emailjs-com";
import "./Contact.css";
import React from "react";

const Contact =() => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      'service_4hqrt4p',
      'template_mebnqno',
      e.target,
      'user_vVXH8VL0YnDG8Gx4iRCqj'
    ).then(res=>{
      console.log(res)

    }).catch(err=>console.log(err));
  }
  return (
    <div className="container_border">
      <h1 className="title_form">Contact Me</h1>
      <form onSubmit={sendEmail}>
        <div className="container_form">
          <div>
          <input placeholder="Name" type="text" name="name" className="name_form"/>
       </div>
        <div>
          <input  placeholder="E-mail" type="email" name="user_email" />
        </div>
        <div>
      <textarea  placeholder="Message" name="message" rows="4" cols="21" />
      </div>
      <div>
      <input type="submit" value="Send" />
        </div>
      </div>
      </form>
    </div>
  );
}

export default Contact;
