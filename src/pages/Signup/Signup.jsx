import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { SignupForm } from "../../components/SignupForm/SignupForm";
import { supabase } from "../../utils/supabaseClient";
import "./Signup.css"

function Signup(props){

    const {loading, setLoading, error, setError} = props;

    const navigate = useNavigate();

    const signupUser = async (ev) => {
        ev.preventDefault();
        // console.log(ev.target)
        setLoading(true);
        
        try{

            const { error } = await supabase
                .from('User')
                .insert([
                    {
                        name,
                        lastname,
                        email,
                        password,
                    },
                ])

            if(!!error) throw error;

            console.log({
                name: name,
                lastmame: lastname,
                email,
                password,
            });

            setName("");
            setLastname("");
            setEmail("");
            setPassword("");
            
            setLoading(false);
            setError(false);

            navigate("/login");

        }catch(error){
            console.error(error.error_description || error.message);
            setError(true);
        }

    }

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <section className="sign-up">

            <SignupForm 
                name={name} 
                setName={setName}
                lastname={lastname}
                setLastname={setLastname}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                onSubmit={signupUser} 
            />

        </section> 
    );

}

export { Signup };