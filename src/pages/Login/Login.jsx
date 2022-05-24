import React, { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login(props){

    const {
        user, 
        setUser, 
        saveUser, 
        error, 
        setError,
        loading, 
        setLoading
    } =  props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
       useEffect(() => {
        if(!!user.name){
            saveUser(user);
            navigate("/");
        }

    }, [user])

    const loginUser = async (ev) => {
        ev.preventDefault();
        setLoading(true);
        try{
            const { data: foundUser, error } = await supabase
                .from('User')
                .select()
                .eq("email", email)
                .eq("password", password)
                .single()

            if(error) throw error;

            console.log(foundUser);

            foundUser.measures = {
                height: [],
                weight: [],
                imc: [],
                dates: []
            }

            setUser(foundUser);

            if(!!error) setError(false);

        }catch(error){
            console.error(error.error_description || error.message);
            setError(true);
        }

        setLoading(false);
    }

    const emailOnChange = (ev) => {
        setEmail(ev.target.value);
    }

    const passwordOnChange = (ev) => {
        setPassword(ev.target.value);
    }

    return (
        <section className="login">
            {
                !!loading &&
                <h2>Loading ...</h2>

            }
            <form onSubmit={loginUser} className="neumorphism">
                <h2>Iniciar sesion</h2> 
                <label name="email">
                    Correo
                    <input 
                        name="email" 
                        value={email}
                        onChange={emailOnChange}
                        required
                    />
                </label>
                <label name="password">
                    Contrasena
                    <input 
                        name="password" 
                        type="password"
                        value={password}
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