import React from "react";
import { Link } from "react-router-dom";

function LoginForm(props){

    const {
        email, 
        setEmail,
        password, 
        setPassword,
        loginUser,
        error
    } = props;

    const emailOnChange = (ev) => {
        setEmail(ev.target.value);
    }

    const passwordOnChange = (ev) => {
        setPassword(ev.target.value);
    }

    return (
        <form onSubmit={loginUser} className="neumorphism">
            
            <h2>Iniciar sesión</h2> 
            
            <label name="email">
                Correo
                <input 
                    name="email" 
                    type="email"
                    value={email}
                    onChange={emailOnChange}
                    required
                />
            </label>

            <label name="password">
                Contraseña
                <input 
                    name="password" 
                    type="password"
                    value={password}
                    onChange={passwordOnChange}
                    required
                />
            </label>
            
            <button type="submit" className="btn">Iniciar sesión</button>
            
            <p>¿No te has registrado aún?
                <Link to="/sign-up"> Registrarme</Link>
            </p>

            {
                !!error &&
                <p className="error">
                    Correo o contraseña incorrectos
                </p>
            }

        </form>
    );
}

export { LoginForm };