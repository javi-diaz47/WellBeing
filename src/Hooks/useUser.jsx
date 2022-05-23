import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useUser(){


    const {
        item: user,
        setItem: setUser,
        saveItem: saveUser,
        removeItem: removeUser,
        error,
        loading,
        login,
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

    return ({
        user,
        setUser,
        saveUser,
        removeUser,
        error,
        loading,
        login,
    });

}

export { useUser };