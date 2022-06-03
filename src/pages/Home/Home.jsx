import React from "react";
import { Button } from "../../components/Button/Button";
import logo from "../../indoor-bike.svg"
import { Loading } from "../../components/Loading/Loading";
import "./Home.css";

function Home(props){
    
    const { user, loading, isLogged } = props;
    return (
       <div className="home">
            {
                !!Loading &&
                <Loading loading={loading}/>
            }

            {
               !loading &&
                <section className="wrapper">
                    <main>
                        <h2>Weight Tracker</h2>
                        <p>
                            Bienvenido a Weight Tracker, en este sitio web podrás 
                            monitorear tu IMC, su evolución en el tiempo, las 
                            estadísticas y recibir notificaciones acerca de tu peso.
                        </p>
                        {
                            !!isLogged && !!user.name && user.name !== "" &&
                            <Button text="Calcular mi IMC" link="cal-imc"/>
                            
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