import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useUser(){

    const {
        item: user,
        setItem: setUser,
        saveItem: saveUser,
        removeItem: removeUser,
        error,
        setError,
        loading,
        setLoading,
    } = useLocalStorage('user', {
        name: "",
        lastname: "",
        email: "",
        password: "",
        measures: {
            height: [],
            weight: [],
            imc: [],
            dates: [],
        }
    });
    const logged = () => {
        return !!user.name ? 
            true : 
            false;
    }

    return ({
        user,
        setUser,
        saveUser,
        removeUser,
        error,
        setError,
        loading,
        setLoading,
        logged,
    });

}

export { useUser };