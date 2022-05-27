import React, { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import { LoginForm } from "../../components/LoginForm/LoginForm";
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

            // console.log(foundUser);

            const { data: measures, measuresError} = await supabase
                .from('Measures')
                .select()
                .eq("userId", foundUser.id)

            // console.log(measures);

            const height = [];
            const weight = [];
            const imc = [];
            const dates = [];

            for(const measure of measures){
                weight.push(measure.weight);
                height.push(measure.height);
                imc.push(measure.imc);
                dates.push(measure.date);
            }

            // console.log(measuresError);

            foundUser.measures = {
                height,
                weight,
                imc,
                dates
            }

            setUser(foundUser);

            if(!!error) setError(false);

        }catch(error){
            console.error(error.error_description || error.message);
            setError(true);
        }

        setLoading(false);
    }

    return (
        <section className="login">

            {
                !!Loading &&
                <Loading loading={loading}/>
            }

            <LoginForm 
                email={email} 
                setEmail={setEmail} 
                password={password}
                setPassword={setPassword}
                loginUser={loginUser}
                error={error}
            />

       </section> 
    );
}

export { Login };