import "./ContactForm.scss";
import React from "react";
import { Button } from "..";

const ContactForm = () => {
  return (
    <div className="form-container">
      <form className="form-contact">
        <h1 className="form-title">Quieres solicitar mas información? Envíanos un Mensaje...</h1>
        <div className="form-input-group">
          <p className="form-label">Tu nombre:</p>
          <input type="text" className="form-input" required />
        </div>
        <div className="form-input-group">
          <p className="form-label">Tu correo personal:</p>
          <input type="email" className="form-input" required />
          <span className="focus-input"></span>
        </div>
        <div className="form-input-group">
          <p className="form-label">Tu número de contacto(opcional)</p>
          <input type="number" className="form-input" />
        </div>
        <div className="form-input-group">
          <p className="form-label">Mensaje:</p>
          <textarea type="text" className="form-input" placeholder="Deja tu mensaje aquí.." required />
        </div>
        <div className="form-btn-group">
          <Button
            title="Enviar"
            fontColor="var(--text-color)"
            gradColor1="var(--primary-color)"
            gradColor2="var(--secondary-color)"
            direction="45deg"
            width="100%"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
