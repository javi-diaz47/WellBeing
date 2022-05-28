import {useState, useEffect} from "react";

function useLocalStorage(itemName, initValue){

    const [item, setItem] = useState(initValue);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        try{
            
            let localStorageItem = localStorage.getItem(itemName)
            let parsedItem;

            if(!localStorageItem){
                localStorage.setItem(itemName, JSON.stringify(initValue));
            }else{
                parsedItem = JSON.parse(localStorageItem);
            }

            setItem(parsedItem);
            setLoading(false);

        }catch(err){
            setError(true);
        }
    }, []);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
    }

    const removeItem = () => {
        localStorage.removeItem(itemName);
    }

    return ({
        item,
        setItem,
        saveItem,
        removeItem,
        error,
        setError,
        loading,
        setLoading,
    });

}


export { useLocalStorage };