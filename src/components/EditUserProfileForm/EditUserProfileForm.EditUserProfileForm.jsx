import React from "react";

function EditUserProfileForm(props){
    
    const {
        user,
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
        notification, 
        setNotification,
        updateUser
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

    const notificationOnChange = (ev) => {
        setNotification(ev.target.value);
    }

    const heightOnChange = (ev) => {
        setHeight(ev.target.value);
    }

    return(
        <form onSubmit={updateUser} className="neumorphism">
            <h2>Editar perfil</h2>
            <label name="name">
                Nombres
                <input 
                    name="name" 
                    value={name}
                    placeholder={user.name}
                    onChange={nameOnChange}
                />
            </label>
            <label name="lastname">
                Apellidos
                <input 
                    name="lastname"
                    value={lastname} 
                    placeholder={user.lastname} 
                    onChange={lastnameOnChange} 
                />
            </label>
            <label name="email">
                Correo
                <input 
                    name="email"
                    type="email"
                    value={email} 
                    placeholder={user.email} 
                    onChange={emailOnChange}
                />
            </label>
            
            <label name="password">
                Contraseña
                <input 
                    name="password"
                    value={password}
                    placeholder={user.password}
                    onChange={passwordOnChange}
                />
            </label>

            <label name="height">
                Altura (m)
                <input 
                    name="height"
                    value={height}
                    placeholder={user.height}
                    onChange={heightOnChange}
                />
            </label>

            <label name="notification">
                Notificaciones: {user.notification === "true"? "Sí" : "No"}
                <select
                    name="notification"
                    onChange={notificationOnChange}
                    list="notification"
                >
                    <option value={undefined}></option>
                    <option value="true">Sí</option>
                    <option value="false">No</option>
                </select>
            </label>



            <button type="submit" className="btn">Guardar</button>
        </form>
    );

}

export { EditUserProfileForm };