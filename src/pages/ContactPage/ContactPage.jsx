import "./ContactPage.scss";
import React from "react";
import { ContactForm } from "../../components";
import image from "../../img/message.svg";

const ContactPage = () => {
  return (
    <div className="contact-page">

      <ContactForm />
      <img src={image} alt="contact-img" className="contact-page__img" />
    </div>
  );
};

export default ContactPage;
