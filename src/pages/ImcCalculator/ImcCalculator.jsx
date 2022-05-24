import React, { useEffect, useState } from "react";
import "./ImcCalculator.css"

import { ImcResult } from "../../components/ImcResult/ImcResult";
import { ImcCalculatorForm } from "../../components/ImcCalculatorForm/ImcCalculatorForm";
import { LineChart } from "../../components/LineChart/LineChart";

function ImcCalculator(props){

    const { 
        user, 
        setUser,
        saveUser, 
        error, 
        setError 
    } = props;

    const [health, setHealth] = useState(0);

    // The Data that will be in the chart
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
            
            setUser(newUser)
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
                    borderColor: 'rgb(249, 170, 44)',
                    backgroundColor: 'rgba(249, 170, 44, 0.5)',
                    lineTension: 0.4
                },
            ],
 
        })

    }, [user]);

    

    return (
        <section className="imc-calculator">
            <div className="calculator-wrapper"> 
                <article className="calculator">
                    
                    <ImcCalculatorForm
                        calculateImc={calculateImc}
                        heightOnChange={heightOnChange}
                        weightOnChange={weightOnChange}
                        error={error}
                    />                   

                    <ImcResult 
                        health={health}
                    />

                </article>

                <article className="chart">

                   <LineChart
                        data={data}
                    />

                </article>

           </div>
        </section>
    )

}

export { ImcCalculator };