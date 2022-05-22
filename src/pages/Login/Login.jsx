import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login(props){

    const { saveUser, toggleLogin } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    
    const onSubmit = (ev) => {
        ev.preventDefault();
        console.log({
            email,
            password,
        })

         if(email === "test@test.com" && password ==="123"){
            
            saveUser({
                name: "test user",
                lastname: "",
                email,
                password
            })
            navigate("/");
        }

        setEmail("");
        setPassword("");

    }

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