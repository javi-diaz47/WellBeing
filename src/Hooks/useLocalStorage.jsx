import {useState, useEffect} from "react";

function useLocalStorage(itemName, initValue){

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);


    const [item, setItem] = useState(initValue);

    useEffect(() => {
        try{
            setTimeout(() => {
            
                let localStorageItem = localStorage.getItem(itemName)
                let parsedItem;

                if(!localStorageItem){
                    localStorage.setItem(itemName, JSON.stringify(initValue));
                }else{
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false);
            }, 1000)
           
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
        saveItem,
        removeItem,
        error,
        loading,
    });

}


export { useLocalStorage };