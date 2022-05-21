import react, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "../Button/Button";
import "./layout.css";

function Layout(props){
    
    const {user, login, logout} = props;

    const onLogout = () => {
       logout();
    }

    return (
        <div className="layout">
            <header>
                <nav className="nav">
                    <ul className="pages">
                        <li>
                            <Link to="/"> Home </Link>
                        </li>
                        <li>
                            <Link to="contact-us"> Contact us </Link>
                        </li>
                        <li>
                            <Link to="about-us"> About us </Link>
                        </li>
                    </ul>
                    <ul className="sign-up-login">
                        {!!login && !!user.name &&
                            <>
                                <h2>{`${user.name} ${user.lastname}`}</h2> 
                                <button className="btn" onClick={onLogout}>logout</button>
                            </> 
                        }
                        { !login &&
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