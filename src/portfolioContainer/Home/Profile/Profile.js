import React from 'react'
import Typical from 'react-typical' 
import "./Profile.css"

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.facebook.com/profile.php?id=100070035788385'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://www.instagram.com/sin13cadenas/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://gist.github.com/SoyStir'>
                                <i className='fa fa-github  '></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hola, Soy <span className="highlighted-text">Stir</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                <Typical
                                loop={Infinity}
                                steps={[
                                    'Ethusiastic Dev 🔴',
                                    1000,
                                    'Full Stack Dev 💻',
                                    1000,
                                    'MERN Stack Dev 😎',
                                    1000,
                                    'Cross Platform Dev 🌐',
                                    1000,
                                    'React/React Native Dev 📱',
                                    1000,
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                            Habilidad para construir aplicaciones con operaciones frontales.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Contratame
                        </button>
                        <a href="stircv.pdf" download='Stir stircv.pdf' >
                            <button className='btn highlighted-btn'>obtener currículum</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className="profile-picture-background">
                    </div>
                </div>
            </div>
        </div>
    )
}
