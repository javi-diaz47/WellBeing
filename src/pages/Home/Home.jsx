import React from "react";
import { Button } from "../../components/Button/Button";
import logo from "../../logo.svg"
import "./Home.css";

function Home(props){
    
    const { user, loading, login } = props;
    return (
       <div className="home">
           {
               !!loading &&
               <h2>Cargando</h2>
           }
           {
               !loading &&
                <section className="wrapper">
                    <main>
                        <h2>Weight Tracker</h2>
                        <p>
                            Bienvenido a weight tracker, en este sitio web podras
                            monitorear tu imc, su evolucion en el tiempo, las
                            estadisticas y recibir notificaciones acerca de su peso
                        </p>
                        {
                            !!login && !!user.name && user.name !== "" &&
                            <Button text="Calcualr mi IMC" link="cal-imc"/>
                            
                            ||

                            <Button text="registrarme" link="sign-up"/>
                        }
                    </main>
                    <figure>
                            <img src={logo}></img>
                    </figure>
                </section>
           }
     </div> 

    );

}

export { Home }