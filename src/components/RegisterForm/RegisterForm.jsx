import "./RegisterForm.scss";
import { Button } from "./../../components";
import React, { useState } from "react";
import { firebase } from "../../config/firebase";
import { Alert } from "@material-ui/core";
import CountrySelect from "../CountrySelector/CountrySelector";

const RegisterForm = ({ onLogin }) => {
  const [values, setValues] = useState({});
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const email = values.email;
    const password = values.password;

    if (!isLogin) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((currentUser) => {
          const { email, uid } = currentUser.user;
          onLogin({ email, uid });
        })
        .catch((error) => {
          console.error("Error in createUserWithEmailAndPassword", error.message);
          setError(error.message);
        });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((currentUser) => {
          const { email, uid } = currentUser.user;
          onLogin({ email, uid });
        })
        .catch((error) => {
          console.error("Error in createUserWithEmailAndPassword", error.message);
          setError(error.message);
        });
    }
  }

  return (
    <div className="container-xl">
      <div className="row">
      {isLogin ? <h1 className="register-form__title">Inicio de Sesión:</h1> : <h1 className="register-form__title">No tienes cuenta aún? Regístrate ahora:</h1>}
        <div className="col-10 col-md-6 mx-auto">
          <form className="register-form" onSubmit={handleSubmit}>
            <fieldset className="register-form__fields mb-3 w-100">
              <label className="register-form__label form-label">Correo electrónico:</label>
              <input className="register-form__input " name="email" type="email" required onChange={handleInput} />
            </fieldset>
            <fieldset className="register-form__fields mb-3 w-100">
              <label className="register-form__label form-label">Contraseña:</label>
              <input
                className="register-form__input "
                name="password"
                type="password"
                onChange={handleInput}
                required
                maxLength="12"
                minLength="6"
              />
              <div id="emailHelp" className="form-text">
                Mínimo 6 caracteres 1 mayúscula y 1 número.
              </div>
              {error ? <Alert severity="error">{error}</Alert> : null}
            </fieldset>

            {isLogin ? null : (
              <div>
                <fieldset className="register-form__fields mb-3 w-100">
                  <label className="register-form__label form-label">Pais de origen:</label>
                  <CountrySelect />
                </fieldset>
                <fieldset className="register-form__fields mb-3 w-100">
                  <label className="register-form__label form-label">Número móvil:</label>
                  <input className="register-form__input " name="phone" type="tel"  onChange={handleInput} />
                </fieldset>
              </div>
            )}

            <Button
              title={isLogin ? "Iniciar sesión" : "Registrarme"}
              width="100%"
              fontColor="white"
              gradColor1="rgb(8, 70, 218)"
              gradColor2="rgb(37, 249, 245)"
              direction="45deg"
            />
            <Button
              className="my-2"
              onClick={() => setIsLogin(!isLogin)}
              title={isLogin ? "Quiero registrarme" : "Quiero iniciar sesión"}
              gradColor1="#90f7ec"
              gradColor2="#32ccbc"
              direction="235deg"
              width="100%"
              fontColor="white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
