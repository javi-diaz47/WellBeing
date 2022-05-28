import React, {useState} from "react";
import { EditUserProfileForm } from "../../components/EditUserProfileForm/EditUserProfileForm.EditUserProfileForm";
import { Loading } from "../../components/Loading/Loading";
import { supabase } from "../../utils/supabaseClient";
import "./EditUserProfile.css";

function EditUserProfile(props){

    const { 
        user, 
        setUser, 
        saveUser, 
        removeUser, 
        loading, 
        setLoading,
        error,
        setError
    } = props;
   
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notification, setNotification] = useState("");

    const verifyNoti = () => {
        if(!!notification && notification != undefined && notification != ""){
            return notification;
        }
        return user.notification;
    }

    const updateUser = async (ev) => {
        ev.preventDefault();
        setLoading(true);
        
        const newUser = {
            id: user.id,
            name: !!name && name != undefined? name : user.name,
            lastname: !!lastname && lastname != undefined? lastname : user.lastname,
            email: !!email && email != undefined? email : user.email,
            password: !!password && password != undefined? password : user.password,
            notification: verifyNoti(),
            measures: user.measures
        }

        try{

            const { error } = await supabase
                .from('User')
                .update([
                    {
                        name: newUser.name,
                        lastname: newUser.lastname,
                        email: newUser.email,
                        password: newUser.password,
                        notification: newUser.notification
                   },
                ])
                .eq('id', user.id)

            if(!!error) throw error;

            removeUser();
            setUser(newUser)
            saveUser(newUser)

            setLoading(false);
            setError(false);

        }catch(error){
            console.error(error.error_description || error.message);
            setError(true);
        }

    }

    return (
        <section className="edit-user-profile">
            {
                !!Loading &&
                <Loading loading={loading}/>
            }

            <EditUserProfileForm
                user={user}
                name={name}
                setName={setName}
                lastname={lastname}
                setLastname={setLastname}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                notification={notification}
                setNotification={setNotification}
                updateUser={updateUser}
            />
        </section> 
    );

}

export { EditUserProfile };