import React, {useState} from "react";
import "./Signup.css"

function Signup(){

    const onSubmit = (ev) => {
        ev.preventDefault();
        console.log({
            name: firstName,
            lastName: lastName,
            email,
            password,
            weight: +weight,
            height: +height
        })
        setFirstName("");
        setLastName("");
    }

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    // registered | error | neutro
    const state = useState("neutro")

    const firstNameOnChange = (ev) => {
        setFirstName(ev.target.value);
    }

    const lastNameOnChange = (ev) => {
        setLastName(ev.target.value);
    }
  
    const emailOnChange = (ev) => {
        setEmail(ev.target.value);
    }

    const passwordOnChange = (ev) => {
        setPassword(ev.target.value);
    }

   const weightOnChange = (ev) => {
        setWeight(ev.target.value);
    }

    const heightOnChange = (ev) => {
        setHeight(ev.target.value);
    }
    

    return (
        <section className="sign-up">
            <form onSubmit={onSubmit} className="neumorphism">
                <h2>Registrame</h2> 
                <label name="first-name">
                    Nombres
                    <input 
                        name="first-name" 
                        onChange={firstNameOnChange}
                    />
                </label>
                <label name="last-name">
                    Apellidos
                    <input 
                        name="last-name" 
                        onChange={lastNameOnChange} 
                    />
                </label>
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
                <label name="weight">
                    Peso (kg)
                    <input 
                        name="weight"
                        onChange={weightOnChange}
                    />
                </label>
                <label name="height">
                    Altura (m)
                    <input 
                        name="height"
                        onChange={heightOnChange}
                    />
                </label>

                <button type="submit" className="btn">Registrame</button>

           </form>

        </section> 
    );

}

export { Signup };