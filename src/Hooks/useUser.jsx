import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useUser(){


    const {
        item: user,
        saveItem: saveUser,
        removeItem: removeUser,
        error,
        loading,
        login,
    } = useLocalStorage('user', {});

    return ({
        user,
        saveUser,
        removeUser,
        error,
        loading,
        login,
    });

}

export { useUser };