import React, { useEffect, useState } from "react";
import "./ImcCalculator.css"

import { ImcResult } from "../../components/ImcResult/ImcResult";
import { ImcCalculatorForm } from "../../components/ImcCalculatorForm/ImcCalculatorForm";
import { LineChart } from "../../components/LineChart/LineChart";

import { send } from "@emailjs/browser";
import { getUserWeightLevel, getUserWeightLevelIndex } from "../../utils/getUserWeightLevel";
import { getUserIdealWeightRange } from "../../utils/getUserIdealWeightRange";

function ImcCalculator(props){

    const { 
        user, 
        setUser,
        saveUser, 
        saveMeasuresDB,
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

    const [notification, setNotification] = useState("")
    
    
    const MAX_HEIGHT = 2.8;
    const MIN_HEIGHT = 0.546;
    const MAX_WEIGHT = 636;

    const calculateImc = async (ev) => {
        ev.preventDefault();
        
        if(height > MIN_HEIGHT && height < MAX_HEIGHT && weight < MAX_WEIGHT){
            
            setError(false);

            const imc = user.measures.imc;
            const newImc = (+((+weight)/((+height)*(+height))).toFixed(3));
            setHealth(newImc);
            imc.push(newImc);
            
            const dates = user.measures.dates;
            const date = (new Date(Date.now())).toLocaleDateString();
            dates.push(date);

            const newHeight = user.measures.height;
            newHeight.push(+height);
            
            const newWeight = user.measures.weight;
            newWeight.push(+weight);

            
            const newUser = {
                id: user.id,
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                password: user.password,
                notification: user.notification,
                measures: {
                    height: newHeight,
                    weight: newWeight,
                    imc,
                    dates
                }
            }
            
            await saveMeasuresDB((+weight), (+height), newImc, date, user.id);

            if(user.measures.weight.length > 1 && user.notification === "true"){
                const oldWeightLevel = getUserWeightLevel(user.measures.imc[user.measures.imc.length - 2]);
                const newWeightLevel = getUserWeightLevel(user.measures.imc[user.measures.imc.length - 1]);

                if(oldWeightLevel !== newWeightLevel){
                    
                    let message = "";
                    
                    if(newWeightLevel === 0){
                        message = "ups, estas bajo de peso, pero no te preocupes nosotros sabemos \n que puedes con esto y muy pronto alcanzaras tu peso ideal";
                    }else if(newWeightLevel === 2 && oldWeightLevel === 3){
                        message = "¡Muy bien! Ya estas cerca de llegar a tu peso ideal, ¡Tu puedes!";
                    }else if(newWeightLevel > oldWeightLevel){
                        message = "Subiste un poco de peso. Pero no desfallezcas \n ¡Nosotros confiamos en que puedes lograr tu objetivo!";
                    }else if(newWeightLevel === 1){
                        message = "¡Lo lograste! Haz alcanzado tu Peso Ideal!";
                    }

                    const { minIdealWeight, maxIdealWeight} = getUserIdealWeightRange((+height));
                    send(
                        'service_vg0ceee', 
                        'template_sijx8ib', 
                            {
                                name: user.name,
                                email: user.email,
                                oldImc: user.measures.imc[user.measures.imc.length - 2],
                                newImc,
                                oldWeightLevel,
                                newWeightLevel,
                                message,
                                minIdealWeight,
                                maxIdealWeight 
                            }, 
                        'WmBCgd6LFV1-TOG1O'
                    ).then((result) => {
                        console.log(result.text);
                        }, (error) => {
                        console.log(error.text);
                    });
                }

            }

              
            setUser(newUser);
            saveUser(newUser);

        }else{
            setError(true)
        }

      
    }

    const sendNotification = (notification) => {
        
        const newUser = {
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
            notification: notification,
            measures: user.measures
        }

        setUser(newUser);
        saveUser(newUser);

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
                {
                    user.notification === "ask" &&
                    <article className="notification">
                        <div className="notification-wrapper neumorphism">
                            <h2>
                                Deseas recibir notificaciones de Weight Tracker
                            </h2>
                            <div className="notification-button-wrapper">
                                <button className="btn" onClick={() => sendNotification("true")}>Aceptar</button>
                                <button className="btn" onClick={() => sendNotification("false")}>Denegar</button>
                            </div>
                        </div>
                  </article>
 
                }
           </div>
        </section>
    )

}

export { ImcCalculator };