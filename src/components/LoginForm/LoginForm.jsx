
import React, {useState} from 'react'
import { loginApi } from '../../api/auth.api';
const LoginForm = (props) => {
    const [error, setError] = useState("");

    const submitForm = async (ev) => {
      ev.preventDefault();
      setError("");
  
      try {
        const { email, password } = ev.target;
        const form = {
          email: email.value,
          password: password.value,
        };
  
        const user = await loginApi(form);
        props.saveUser(user);
      } catch (error) {
        console.log("Error -> Login", error);
        setError(error.message);
      }
    };
    return (
        <div className="login-form">
            <form onSubmit={submitForm}>
                <fieldset>
                    <label htmlFor="email" className="">Usuario (email)</label>
                    <input type="email" name="email" id="email" />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" placeholder="password" />
                </fieldset>
                {error && <div style={{ color: "red" }}>{error}</div>}
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </form>
        </div>
    )
}

export default LoginForm
