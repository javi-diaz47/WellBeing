import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { supabase } from "../utils/supabaseClient";
import { USER_SCHEME } from "../utils/userScheme";



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
    } = useLocalStorage('user', USER_SCHEME);

    useEffect(() => {
        logged();
    }, [user])

    const logged = () => {
        if(!!user.name){
            setIsLogged(true);
        }else{
            setIsLogged(false);
        }
    }

    const [isLogged, setIsLogged] = useState(false);

    const saveMeasuresDB = async (weight, height, imc, date, userId) => {
        try{
            const { error } = await supabase
                .from('Measures')
                .insert([
                    {
                        weight,
                        height,
                        imc,
                        date,
                        userId
                    },
                ])

            if(!!error) throw error;

        }catch(error){
            console.error(error.error_description || error.message);
        }

    }


    return ({
        user,
        setUser,
        saveUser,
        removeUser,
        saveMeasuresDB,
        error,
        setError,
        loading,
        setLoading,
        isLogged,
        setIsLogged,
        logged,
    });

}

export { useUser };