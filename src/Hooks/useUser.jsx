import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useUser(){

    const [login, setLogin] = useState(false);

    const {
        item: user,
        saveItem: saveUser,
        removeItem: logout,
        error,
        loading,
    } = useLocalStorage('user', {});


    useEffect(() => {
        if(!!user.name){
            setLogin(true);
        }
    }, [user.name])

    return ({
        user,
        saveUser,
        error,
        loading,
        login,
        logout
    });

}

export { useUser };