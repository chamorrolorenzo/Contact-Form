import React from "react";
import "../style/form-contact.css"

export default function FormContact() {
  return (
    <section className="form-container">
      <h1>Contac US</h1>
      
      <form className="name">
        <label>
          First Name *
          <input type="text" name="firstname"/>
        </label>

        <label >
          Last Name *
          <input type="text"name="lastname"/>
        </label>
      </form>

      <form>
        <label className="email" >
          Email Address *
          <input type="email"name="email"/>
        </label>
      </form>

      <fieldset>
        <legend>Query Type *</legend>

         <label>
          <input type="radio" name="queryType" value="general" />
          General Enquiry
         </label>

        <label>
          <input type="radio" name="queryType" value="support" />
          Support Request
        </label>
      </fieldset>

      <label className="text">
        Message *
        <textarea name="message"></textarea>
      </label>

      <label>
       <input type="checkbox" name="consent" />
       I consent to being contacted by the team
      </label>

      <button type="submit">Submit</button>

    </section> 
  );
}
