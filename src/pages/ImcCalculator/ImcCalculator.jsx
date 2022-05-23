import React, { useEffect, useState } from "react";
import "./ImcCalculator.css"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Historial de mediciones IMC',
    }
  },
};


function ImcCalculator(props){

    const { user, saveUser } = props;

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const heightOnChange = (ev) => {
        setHeight(ev.target.value);
    }

    const weightOnChange = (ev) => {
        setWeight(ev.target.value);
    }

    const MAX_HEIGHT = 2.8;
    const MIN_HEIGHT = 0.546;
    const MAX_WEIGHT = 636;


    const calculateImc = (ev) => {
        ev.preventDefault();
        
        console.log(height)
        if(height > MIN_HEIGHT && height < MAX_HEIGHT && weight < MAX_WEIGHT){
            
            setError(false);

            const imc = user.measures.imc;
            const newImc = (+((+weight)/((+height)*(+height))).toFixed(3));
            setHealth(newImc);
            imc.push(newImc);
            
            const dates = user.measures.dates;
            const date = new Date(Date.now());
            dates.push(date.toLocaleDateString());

            const newHeight = user.measures.height;
            newHeight.push(+height);
            
            const newWeight = user.measures.weight;
            newWeight.push(+weight);

            
            const newUser = {
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                password: user.password,
                measures: {
                    height: newHeight,
                    weight: newWeight,
                    imc,
                    dates
                }
            }

            // setMeasures(newMeasures);
            saveUser(newUser);

        }else{
            setError(true)
        }

      
    }

    useEffect(() => {
        setData({
            labels: user.measures.dates,
            datasets: [
                {
                    label: 'Medicion IMC',
                    data: user.measures.imc,
                    // borderColor: 'rgb(53, 162, 235)',
                    // borderColor: '#F9AA2C',
                    borderColor: 'rgb(249, 170, 44)',
                    backgroundColor: 'rgba(249, 170, 44, 0.5)',
                    // backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    lineTension: 0.4
                },
            ],
 
        })
         
    }, [user]);

    const [data, setData] = useState({
            labels: user.measures.dates,
            datasets: [
                {
                    label: 'Medicion IMC',
                    data: user.measures.imc,
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    lineTension: 0.4
                },
            ],
        });

    const [health, setHealth] = useState(0);
    
    const [error, setError] = useState(false);

    const UNDER_WEIGHT = 18.5;
    const ADECUATE_WEIGHT = 24.9;
    const OVERWEIGHT = 29.9;
    const OBESE_1 = 34.3;
    const OBESE_2 = 39.9;

    return (
        <section className="imc-calculator">
            <div className="calculator-wrapper"> 
                <article className="calculator">
                    <form onSubmit={calculateImc} className="neumorphism">
                        <h2>Calculadora IMC</h2>
                        <label name="height">
                            Altura (m)
                            <input 
                                name="height"
                                onChange={heightOnChange}
                                required
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

                    <div className="imc-result neumorphism">
                        {
                            health > 0 && 
                            <h2>Tu IMC es de {health}</h2>
                        }
                        {
                            health > 0 && health < UNDER_WEIGHT &&
                            <p>Estas bajo de peso</p>
                            ||
                            health > UNDER_WEIGHT && health < ADECUATE_WEIGHT &&
                            <p>Estas en tu peso adecuado</p>
                            ||
                            health > ADECUATE_WEIGHT && health < OVERWEIGHT &&
                            <p>Estas en sobrepeso</p>
                            ||
                            health > OVERWEIGHT && health < OBESE_1 &&
                            <p>Estas en Obesidad grado 1</p>
                            ||
                            health > OBESE_1 && health < OBESE_2 &&
                            <p>Estas en Obesidad grado 2</p>
                            ||
                            health > OBESE_2 &&
                            <p>Estas en Obesidad grado 3</p>
 
                        }
                    </div>

                </article>

                <article className="chart">
                    <Line
                        options={options} 
                        data={data} 
                    />
                </article>

           </div>
        </section>
    )

}

export { ImcCalculator };