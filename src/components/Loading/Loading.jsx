import React from "react";
import "./Loading.css";

function Loading(props){
    
    const { loading } = props;

    return (
        !! loading &&
        <div className="loading">
            <div className="lds-heart">
                <div></div>
            </div>
        </div>
   );

}

export { Loading };