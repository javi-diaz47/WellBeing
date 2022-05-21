import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login(){
    
    const onSubmit = (ev) => {
        ev.preventDefault();
        console.log({
            email,
            password,
        })
        setEmail("");
        setPassword("");
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailOnChange = (ev) => {
        setEmail(ev.target.value);
    }

    const passwordOnChange = (ev) => {
        setPassword(ev.target.value);
    }


    return (
        <section className="login">
            <form onSubmit={onSubmit} className="neumorphism">
                <h2>Iniciar sesion</h2> 
                <label name="email">
                    Correo
                    <input 
                        name="email" 
                        onChange={emailOnChange}
                    />
                </label>
                <label name="password">
                    Contrasena
                    <input 
                        name="password" 
                        type="password"
                        onChange={passwordOnChange}
                    />
                </label>
                
                <button type="submit" className="btn">Iniciar sesion</button>
                
                <p>No te has registrado aun?
                    <Link to="/sign-up"> Registrarme</Link>
                </p>

           </form>
       </section> 
    );
}

export { Login };