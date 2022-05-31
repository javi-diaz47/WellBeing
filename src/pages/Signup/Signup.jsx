import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import { SignupForm } from "../../components/SignupForm/SignupForm";
import { supabase } from "../../utils/supabaseClient";
import "./Signup.css"

function Signup(props){

    const {loading, setLoading, error, setError} = props;

    const navigate = useNavigate();

    const signupUser = async (ev) => {
        ev.preventDefault();
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
                        height
                    },
                ])

            if(!!error) throw error;

            console.log({
                name: name,
                lastmame: lastname,
                email,
                password,
                height,
            });

            setName("");
            setLastname("");
            setEmail("");
            setPassword("");
            setHeight(0);
            
            setLoading(false);
            setError(false);

            alert("Te has registrado correctamente")

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
    const [height, setHeight] = useState(0);
    
    return (
        <section className="sign-up">
            {
                !!Loading &&
                <Loading loading={loading}/>
            }
            <SignupForm 
                name={name} 
                setName={setName}
                lastname={lastname}
                setLastname={setLastname}
                email={email}
                setEmail={setEmail}
                password={password}
                height={height}
                setHeight={setHeight}
                setPassword={setPassword}
                onSubmit={signupUser} 
            />

        </section> 
    );

}

export { Signup };