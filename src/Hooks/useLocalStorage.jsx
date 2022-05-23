import {useState, useEffect} from "react";

function useLocalStorage(itemName, initValue){

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);


    const [item, setItem] = useState(initValue);

    const [login, setLogin] = useState(false);

    useEffect(() => {
        try{
            setTimeout(() => {
            
                let localStorageItem = localStorage.getItem(itemName)
                let parsedItem;

                if(!localStorageItem){
                    localStorage.setItem(itemName, JSON.stringify(initValue));
                }else{
                    parsedItem = JSON.parse(localStorageItem);
                    
                    if(!!parsedItem){
                        setLogin(true);
                    }

                }

                setItem(parsedItem);

            }, 1000)
           
        }catch(err){
            setError(true);
        }
    });

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
    }

    const removeItem = () => {
        localStorage.removeItem(itemName);
        setLogin(false);
    }


    return ({
        item,
        setItem,
        saveItem,
        removeItem,
        login,
        error,
        loading,
    });

}


export { useLocalStorage };