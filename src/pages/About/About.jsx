import React from "react";
import logo from "../../CDT.png";
import "./About.css";

function About(){
    
    return (
        <section className="about">
            <div className="wrapper">
                <figure>
                    <img src={logo} />
                </figure>
                <div className="content">
                    <div className="content-wrapper">
                        <h2>CENTRO DE DESARROLLO TECNOLOGICO (CDT)</h2>
                        <p>
                            Somos una empresa que brinda servicios de desarrollo y
                            administración de software virtuales, enfocado en empresas pequeñas,
                            medianas y grandes a nivel del departamento de bolívar.
                        </p>
                    </div>
                </div>
           </div>
       </section>
    );
}

export { About }