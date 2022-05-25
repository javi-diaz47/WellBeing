import React from "react";

function Loading(props){
    
    const {loading} = props;
    

    return (
        !!loading &&
        <h2>Loadding</h2>
    );

}

export { Loading };