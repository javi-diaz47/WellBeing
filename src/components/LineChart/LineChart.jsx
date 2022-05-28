import React from "react";
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
import { getUserWeightLevel } from "../../utils/getUserWeightLevel";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const footer = (tooltipItems) => {
    const weightLevel = getUserWeightLevel(tooltipItems[0].parsed.y)
    return `Nivel de peso: ${weightLevel}`;
}

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Historial de mediciones IMC',
        },
        tooltip: {
            callbacks: {
                footer: footer
            }
        }
    },
};



function LineChart(props){
    
    const { data } = props;

    return (
        <Line
            options={options} 
            data={data} 
        />
    );

}

export { LineChart };