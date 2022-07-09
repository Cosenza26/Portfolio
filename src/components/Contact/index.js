import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';




const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])



    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_API_KEY)
        .then(() => {
            alert('Your message has been sent!');
            window.location.reload(false);
        },
        (err) => {
            alert('Your message has not been sent!, Please try again.');
        });
    };


      

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} idx={15} />
                        <span className='mobile-contact'>Contact Me</span>
                    </h1>
                    <p>
                    I’m interested in freelance/contract work opportunities. If you have any questions, please do not hesitate to contact me using the following form.
                    </p>
                    <div className='contact-form'>

                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="user_name" placeholder="Name" required />


                                </li>

                                <li className='half'>
                                    <input type="email" name="user_email" placeholder="Email" required />


                                </li>

                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required/>
                                </li>

                                <li>
                                    <textarea placeholder='Message' name='message' required  >

                                    </textarea>
                                </li>

                                <li>
                                    {/* <button className='flat-button' type='submit' value='send'>
                                    <span className='text'>Send</span>
                                    <i
                                     className='ri-check-line icon'>

                                    </i>
                                    </button> */}
                                     <input type='submit' className='flat-button' value='Send'>

                                     </input> 
                                </li>

                            </ul>
                        </form>
                    </div>

                </div>

            </div>

            <Loader type="cube-transition"  />
        </>
        
    )
}

export default Contact;