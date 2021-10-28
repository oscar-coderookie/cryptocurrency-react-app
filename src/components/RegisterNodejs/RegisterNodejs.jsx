import { useState } from "react";
import { registerApi } from "../../api/auth.api";

const INITIAL_STATE = {
    email: "",
    name: "",
    password: "",
    emoji: "",
  };


const RegisterNodejs = (props) => {
    const [registerForm, setRegisterForm] = useState(INITIAL_STATE);
    const [error, setError] = useState("");
  

    const handleInput = (ev) => {
      const { name, value } = ev.target;
      setRegisterForm({ ...registerForm, [name]: value });
    };

    const submitForm = async (ev) => {
      ev.preventDefault();
      setError("");
  
      try {
        await registerApi(registerForm);
        setRegisterForm(INITIAL_STATE);
        
      } catch (error) {
        console.log("Error -> Register: ", error);
        setError(error.message);
      }
    };

    console.log(registerForm)
  
    
  

    return (
        <div className="container-register">
        <form className="register-form" onSubmit={submitForm}>
          <fieldset className="register-form__fields">
            <label className="register-form__label">
              Emoji:
            </label>
            <div className="user-form__container-emoji">
              
              <select
                name="emoji"
                className="user-form__select"
                onChange={handleInput}
                value={registerForm.emoji}
              >
                <option className="user-form__options" value="😃">
                  😃
                </option>
                <option className="user-form__options" value="👽">
                  👽
                </option>
                <option className="user-form__options" value="🤘">
                  🤘
                </option>
                <option className="user-form__options" value="😺">
                  😺
                </option>
                <option className="user-form__options" value="🐴">
                  🐴
                </option>
                <option className="user-form__options" value="💾">
                  💾
                </option>
                <option className="user-form__options" value="🎮">
                  🎮
                </option>
                <option className="user-form__options" value="🎹">
                  🎹
                </option>
                <option className="user-form__options" value="🍉">
                  🍉
                </option>
                <option className="user-form__options" value="🎠">
                  🎠
                </option>
                <option className="user-form__options" value="🌈">
                  🌈
                </option>
              </select>
            </div>
          </fieldset>
          <fieldset className="register-form__fields">
            <label className="register-form__label">
              Name:
            </label>
            <input
              className="register-form__input"
              type="text"
              name="name"
              value={registerForm.name}
              onChange={handleInput}
            />
          </fieldset>
  
          <fieldset className="register-form__fields">
            <label className="register-form__label">
              Email:
            </label>
  
            <input
              className="register-form__input"
              type="email"
              name="email"
              value={registerForm.email}
              onChange={handleInput}
            />
          </fieldset>
  
          <fieldset className="register-form__fields">
            <label className="register-form__label">
              password:
            </label>
  
            <input
              className="register-form__input"
              type="current-password"
              name="password"
              value={registerForm.password}
              onChange={handleInput}
            />
          </fieldset>
  
          {error && <div style={{ color: "red" }}>{error}</div>}
  
          <fieldset className="register-form__fields">
            <input
              className="register-form__button"
              type="submit"
            />
          </fieldset>
        </form>
      </div>
    )
}

export default RegisterNodejs
