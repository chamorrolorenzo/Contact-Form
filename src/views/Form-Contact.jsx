import React, { useState } from "react";
import "../style/form-contact.css";

export default function FormContact() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.firstname.trim()) newErrors.firstname = "This field is required";
    if (!form.lastname.trim()) newErrors.lastname = "This field is required";
    if (!form.email.trim()) newErrors.email = "This field is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Please enter a valid email address";
    if (!form.queryType) newErrors.queryType = "Please select a query type";
    if (!form.message.trim()) newErrors.message = "This field is required";
    if (!form.consent)
      newErrors.consent = "To submit this form, please consent to being contacted";

    setErrors(newErrors);

    // ✅ Si no hay errores → mostrar mensaje de éxito
    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        queryType: "",
        message: "",
        consent: false,
      });
    } else {
      setSuccess(false);
    }
  };

  return (
    <section className="form-container">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <div className="name">
          <label>
            First Name *
            <input
              type="text"
              name="firstname"
              value={form.firstname}
              onChange={handleChange}
            />
            {errors.firstname && <small>{errors.firstname}</small>}
          </label>

          <label>
            Last Name *
            <input
              type="text"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
            />
            {errors.lastname && <small>{errors.lastname}</small>}
          </label>
        </div>

        <label className="email">
          Email Address *
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <small>{errors.email}</small>}
        </label>

        <fieldset>
          <legend>Query Type *</legend>

          <label>
            <input
              type="radio"
              name="queryType"
              value="general"
              checked={form.queryType === "general"}
              onChange={handleChange}
            />
            <p>General Enquiry</p>
          </label>

          <label>
            <input
              type="radio"
              name="queryType"
              value="support"
              checked={form.queryType === "support"}
              onChange={handleChange}
            />
            <p>Support Request</p>
          </label>

          {errors.queryType && <small>{errors.queryType}</small>}
        </fieldset>

        <label className="text">
          Message *
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <small>{errors.message}</small>}
        </label>

        <label className="checkbox">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
          />
          <span>I consent to being contacted by the team *</span>
        </label>
        {errors.consent && <small>{errors.consent}</small>}

        <button type="submit">Submit</button>

        {success && (
          <div className="success-message">
            <h2>Message Sent!</h2>
            <p>Thanks for completing the form. We'll be in touch soon!</p>
          </div>
        )}
      </form>
    </section>
  );
}
