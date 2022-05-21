import React from "react";
import { Link } from "react-router-dom";

function About(){
    
    return (
        <div className="about">
            <h2>This is 
                About
            </h2>     
            <nav>
                <Link to="/"> Home </Link>
            </nav>
        </div>
    );
}

export { About }