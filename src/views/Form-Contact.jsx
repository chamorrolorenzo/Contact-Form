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
     

      <fieldset>
        <legend>Query Type *</legend>
        
         <label >
          <input type="radio" name="queryType" value="general" />
          <p>General Enquiry</p>
         </label>

        <label>
          <input type="radio" name="queryType" value="support" />
           <p>Support Request</p>
        </label>
      </fieldset>

      <label className="text">
        Message *
        <textarea name="message"></textarea>
      </label>

      <label className="checkbox">
       <input type="checkbox" name="consent" />
       <p>I consent to being contacted by the team</p>
      </label>

      <button type="submit">Submit</button>
</form>
    </section> 
  );
}
