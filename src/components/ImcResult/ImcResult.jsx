import React from "react";
import { getUserWeightState } from "../../utils/getUserWeightState";

function ImcResult({health}){
    
    const result = getUserWeightState(health);
    
    return (
        <div className="imc-result neumorphism">
            {
                health > 0 &&
                <>
                    <h2>Resultados</h2>
                    <p>Tu IMC es de {health}</p>
                    <p>{result}</p>
                </>
           }
       </div>
    );

}

export { ImcResult };