import React, { useRef, useState } from "react";
import "./contact.css";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import emailjs from "@emailjs/browser";
import XITTOOTECH from "../../assets/xittotech.png";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicsKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required");
      return;
    }
    const now = new Date();
    const formattedTime = now.toLocaleString();
    e.target.time.value = formattedTime;
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicsKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="experience">
        <h1 className="contactPageTitle">My Experience</h1>
        <p className="experiencedesc">
          I have had the opportunity to work as an intern for 3 months with a
          company named:
        </p>
        <div className="experienceImgs">
          <img src={XITTOOTECH} alt="XITTOTECH" className="experienceImg" />
        </div>
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Fullname"
            required
          />
          <input
            type="email"
            className="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email-Id"
            required
          />
          <input type="hidden" className="time" name="time" />
          <textarea
            className="msg"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a
              href="https://www.facebook.com/sayal.karki.9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="Facebook" className="link" />
            </a>
            <a
              href="https://www.instagram.com/karkisayal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" className="link" />
            </a>
            <a
              href="https://www.linkedin.com/in/sayal-karki-156312295/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn" className="link" />
            </a>
            <a
              href="https://github.com/sayal35"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="Github" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
