import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { USER_SCHEME } from "../../utils/userScheme";
import { BurgerButton } from "../BurgetButton/BurgerButton";
import { Button } from "../Button/Button";
import "./layout.css";

function Layout(props){
    
    const {
        user, 
        setUser, 
        isLogged, 
        setIsLogged, 
        removeUser
    } = props;

    const navigate = useNavigate();

    const onLogout = () => {
        removeUser();
        setUser(USER_SCHEME);
        setIsLogged(false);
        navigate("/");
    }

    return (
        <div className="layout">
            <header>
                <nav className="nav">
                    <ul className="pages">
                        <li className="highlighted">
                            <Link to="/" > Inicio </Link>
                        </li>
                        <li>
                            <Link to="contact-us">Contáctanos</Link>
                        </li>
                        <li>
                            <Link to="about-us">Nosotros</Link>
                        </li>
                    </ul>
                    <ul className="sign-up-login">
                        {
                            !!isLogged && !!user.name && user.name !== "" &&
                                <>
                                    <h2 className="username">{`${user.name} ${user.lastname}`}</h2> 
                                    <BurgerButton onLogout={onLogout} />
                                </>
                                
                                ||
                                
                                <Button text="Iniciar sesión" link="login"/>
                        }

                    </ul>
                </nav>
            </header>
           <section className="content">
                <Outlet />
            </section>
        </div>
    );

}


export { Layout }