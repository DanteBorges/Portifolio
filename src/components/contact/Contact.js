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
          <input placeholder="Name" type="text" name="name" className="inputs"/>
       </div>
        <div>
          <input  placeholder="E-mail" type="email" name="user_email" className="inputs"/>
        </div>
        <div>
      <textarea  placeholder="Message" type="text" name="message" rows="4" cols="21" className="inputs_message" />
      </div>
      <div>
      <input type="submit" value="Send" className="btn" />
        </div>
      </div>
      </form>
    </div>
  );
}

export default Contact;
