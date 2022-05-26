import React from "react";
import { getUserWeightLevel } from "../../utils/getUserWeightLevel";

function ImcResult({health}){
    
    const result = getUserWeightLevel(health);
    
    return (
        <div className="imc-result neumorphism">
            {
                health > 0 &&
                <>
                    <h2>Resultados</h2>
                    <p>Tu IMC es de {health}</p>
                    <p>Por lo tanto estas en el Nivel de peso: {result}</p>
                </>
           }
       </div>
    );

}

export { ImcResult };