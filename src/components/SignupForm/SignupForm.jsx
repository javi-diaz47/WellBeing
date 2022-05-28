import React from "react";

function SignupForm(props){

    const {
        name,
        setName,
        lastname,
        setLastname,
        email,
        setEmail,
        password,
        setPassword,
        height,
        setHeight,
        onSubmit
    } = props;

   const nameOnChange = (ev) => {
        setName(ev.target.value);
    }

    const lastnameOnChange = (ev) => {
        setLastname(ev.target.value);
    }
  
    const emailOnChange = (ev) => {
        setEmail(ev.target.value);
    }

    const passwordOnChange = (ev) => {
        setPassword(ev.target.value);
    }

    const heightOnChange = (ev) => {
        setHeight(ev.target.value)
    }

    return (
        <form onSubmit={onSubmit} className="neumorphism">
            <h2>Registrame</h2> 
            <label name="name">
                Nombres
                <input 
                    name="name" 
                    value={name}
                    onChange={nameOnChange}
                    required
                />
            </label>
            <label name="lastname">
                Apellidos
                <input 
                    name="lastname"
                    value={lastname} 
                    onChange={lastnameOnChange} 
                    required
                />
            </label>
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
            <label name="height">
                Altura (m)
                <input 
                    name="height"
                    value={height}
                    onChange={heightOnChange}
                    required
                />
            </label>



            <button type="submit" className="btn">Registrame</button>

        </form>

    );

}

export { SignupForm };