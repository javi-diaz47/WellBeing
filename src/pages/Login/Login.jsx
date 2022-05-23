import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../Functions/loginUser";
import "./Login.css";

function Login(props){

    const { setUser, saveUser} = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    
    const [error, setError] = useState(false);
    
    const getLogin = () => {
        const {status, user} = loginUser(email, password);

        if(!!status){
            setUser(user);
            saveUser(user);
            
            if(!!error){
                setError(false);
            }

            navigate("/");
            
            setEmail("");
            setPassword("");
            console.log(user)

        }else{
            setError(true);
        }


    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        getLogin();
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
                        required
                    />
                </label>
                <label name="password">
                    Contrasena
                    <input 
                        name="password" 
                        type="password"
                        onChange={passwordOnChange}
                        required
                    />
                </label>
                
                <button type="submit" className="btn">Iniciar sesion</button>
                
                <p>No te has registrado aun?
                    <Link to="/sign-up"> Registrarme</Link>
                </p>
                {
                    !!error &&
                    <p className="error">
                        Correo o contrasena incorrectos
                    </p>
                }
          </form>
       </section> 
    );
}

export { Login };