import React from "react";

function ImcCalculatorForm(props){

    const {
        user,
        heightOnChange,
        weightOnChange,
        calculateImc,
        error
    } = props;


    return (
        <form onSubmit={calculateImc} className="neumorphism">
            <h2>Calculadora IMC</h2>
            <label name="height">
                Altura (m)
                <input
                    name="height"
                    value={user.height}
                    onChange={heightOnChange}
                />
            </label>
            <label name="weight">
                Peso (kg)
                <input 
                    name="weight"
                    onChange={weightOnChange}
                    required
                />
            </label>
            <button className="btn" type="submit">Calcular</button>

            {
                !!error &&
                <p id="error">
                    Creemos que algo anda mal con tu peso o altura.
                    Verifica que la Altura este en 
                    <span> Metros </span>
                        y que el peso
                    este en 
                    <span> Kilogramos </span>
                </p>
            }
        </form>
    );

}

export { ImcCalculatorForm };