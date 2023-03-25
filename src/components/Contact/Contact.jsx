import React,{useRef, useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Contact = () => {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode
    const form = useRef();
    const[done,setDone]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qem57ah', 'template_hhv5nfd', form.current, 'Ty9wv3VSZSZSjAYVy')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
               <span style={{color:darkMode?'white':'black'}}>Get in Touch</span>
                <span>Contact Me</span>
                <div className="blur s-blurl" style={{background:"#ABF1FF94"}}></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" className="user" placeholder='Name'/>
              <input type="e-mail" name="user_e-mail" className="user" placeholder='E-mail'/>
              <textarea name="message" className='user' placeholder="Message"/>  
              <div className="blur c-blurl" style={{background:"var(--purple)"}}></div>
              <input type="submit" value="Send" className="button"/>
              <span>{done && "Thanks For Contacting Me"}</span>
             <div className="blur c-blurl" style={{background:"var(--purple)"}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact