import React, { useEffect, useState } from 'react';
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


function LineChart(props) {

    const {x, y} = props;

    return <Line 
        options={options} 
        data={{
            labels: [...x],
            datasets: [
                {
                    label: 'Medicion IMC',
                    data: [...y],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    lineTension: 0.4
                },
            ],
        }} 
    />;
}

export { LineChart }
