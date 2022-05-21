import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useUser(){

    const [login, setLogin] = useState(false);

    const {
        item: user,
        saveItem: saveUser,
        error,
        loading,
    } = useLocalStorage('user', {});

    if(!!user.name){
        setLogin(true);
    }

    return ({
        user,
        saveUser,
        error,
        loading,
        login
    });

}

export { useUser };