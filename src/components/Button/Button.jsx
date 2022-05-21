import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

function Button(props){
    
    const {text, link} = props;
    
    const navigate = useNavigate();
    
    const redirect = () => {
        navigate(link)
    }

    return (
        <button 
            className="btn"
            onClick={redirect}
        >
            {text}
        </button>
    );

}

export { Button }
