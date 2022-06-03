import React, {useState, useRef, useEffect} from "react";
import { sendForm } from "@emailjs/browser";
import { Loading } from "../../components/Loading/Loading";
import "./ContactUs.css";

function ContactUs(props){

    const {loading, setLoading} = props;
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const form = useRef();

    const [sent, setSent] = useState(false);

    const nameOnChange = (ev) => {
        setName(ev.target.value);
    }

    const emailOnChange = (ev) => {
        setEmail(ev.target.value);
    }
    
    const messageOnChange = (ev) => {
        setMessage(ev.target.value)
    }

    const onSendEmail = (ev) => {
        ev.preventDefault();
        setLoading(true);

        sendForm(
            'service_vg0ceee', 
            'template_gaf37wo', 
            form.current,
            'WmBCgd6LFV1-TOG1O'
        ).then(() => {
            setSent(true);
            }, (error) => {
            console.error(error.text);
        });


        setLoading(false);

    }

    return (
        <section className="contact-us">

            {
                !!Loading &&
                <Loading loading={loading}/>
            }

            <form ref={form} onSubmit={onSendEmail} className="neumorphism">
            
            <h2>Contáctanos</h2> 

            <label name="name">
                Nombre
                <input 
                    name="name" 
                    value={name}
                    onChange={nameOnChange}
                    required
                />
            </label>
 

            <label name="email">
                Correo
                <input 
                    name="email" 
                    type="email"
                    value={email}
                    onChange={emailOnChange}
                    required
                />
            </label>

            <label name="textArea">
                Mensaje
                <textarea
                    name="message"
                    rows="4"
                    col="2" 
                    value={message}
                    onChange={messageOnChange}
                    required
                />
            </label>

            <button type="submit" className="btn">Enviar</button>

        </form>
        {
            !!sent &&
            <article className="sent-message-card">
                <h2>¡Hemos enviado tu mensaje!</h2>
                <button className="btn" onClick={() => setSent(false)}>Aceptar</button>
            </article>

        }
       </section> 

 
    );

}

export { ContactUs };