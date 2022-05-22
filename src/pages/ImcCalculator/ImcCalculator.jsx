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


function ImcCalculator(){

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const heightOnChange = (ev) => {
        setHeight(ev.target.value);
    }

    const weightOnChange = (ev) => {
        setWeight(ev.target.value);
    }



    const [measures, setMeasures] = useState({
        imc: [],
        dates: []
    });

    const calculateImc = (ev) => {
        ev.preventDefault();

        const imc = measures.imc;
        const dates = measures.dates;

        imc.push((+weight)/((+height)*(+height)))
        
        const date = new Date(Date.now());
        dates.push(date.toLocaleDateString());

        const newMeasures = {
            imc,
            dates
        }

        setMeasures(newMeasures);
       
    }

    useEffect(() => {
        setData({
            labels: measures.dates,
            datasets: [
                {
                    label: 'Medicion IMC',
                    data: measures.imc,
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    lineTension: 0.4
                },
            ],
 
        })
        console.log(measures)
         
    }, [measures]);

    const [data, setData] = useState({
            labels: measures.dates,
            datasets: [
                {
                    label: 'Medicion IMC',
                    data: measures.imc,
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    lineTension: 0.4
                },
            ],
        });

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
                    </form>

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