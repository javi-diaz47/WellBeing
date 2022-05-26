import React, { useEffect } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { USER_SCHEME } from "../../utils/userScheme";
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
                            <Link to="/" > Home </Link>
                        </li>
                        <li>
                            <Link to="contact-us"> Contact us </Link>
                        </li>
                        <li>
                            <Link to="about-us"> About us </Link>
                        </li>
                    </ul>
                    <ul className="sign-up-login">
                        {
                            !!isLogged && !!user.name && user.name !== "" &&
                                <>
                                    <h2 className="username">{`${user.name} ${user.lastname}`}</h2> 
                                    <button className="btn" onClick={onLogout}>logout</button>
                                </>
                                
                                ||
                                
                                <Button text="Iniciar secion" link="login"/>
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