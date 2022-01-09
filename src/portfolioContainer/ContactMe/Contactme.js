import React from 'react'
import { useForm } from '@formspree/react';
import './Contactme.css'
import Typical from 'react-typical'

export default function Contactme() {

    const [state, handleSubmit] = useForm("xlezevev");
    if (state.succeeded) {
        return alert('mensaje enviado')
    }

    return (
        
        <div className='contactme-container'>
            <div className='contactme-parent'>
                <div className="contactme-details-name">
                    <h2>Contacto</h2>
                    <span>Puesdes ponerte en contacto conmigo</span>
                    <hr/>
                </div>
                    <div className='container-mensaje'>
                    <div className='text'>
                                <span >
                            {" "}
                            <h1>
                                <Typical
                                loop={Infinity}
                                steps={[
                                    'Ponerse en contacto📧',
                                    1000,
                                ]}
                                />
                            </h1>
                            </span>
                            </div>
                        <div className='contactme-picture-background'>
                            <img src={require ('../../assets/Home/red.jpg').default} alt='no internet connection' />
                        </div>
                        <div className='forn-container'>
                            <form id='form' onSubmit={handleSubmit}>
                                <div className='forn-section'>
                                    <input className='forn-input'
                                    type="text"
                                    name='name'
                                    placeholder="nombre"/>
                                </div>
                                <div className='forn-section'>
                                    <input className='forn-input' 
                                    type="email" 
                                    name='user_email' 
                                    placeholder="correo" errors={state.errors}/>
                                </div>
                                <div className='forn-section'>
                                    <textarea className='forn-input' 
                                    name='mensaje' 
                                    cols='30' rows='8' 
                                    placeholder='Mensaje' errors={state.errors}>
                                    </textarea>
                                </div>
                                <div>
                                <button className='form-btn' type='submit' value='Send' disabled={state.submitting}>Enviar</button>
                            </div>
                            </form>
                            <a className='tel' href="tel:+1 8093935365">📲Llamar</a>                                                       
                        </div>
                    </div>
            </div>
        </div>
    )
}
