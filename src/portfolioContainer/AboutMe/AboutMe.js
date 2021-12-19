import React from 'react'
import './AboutMe.css'

export default function AboutMe() {
    return (
        <div className='aboutme-container'>
            <div className='aboutme-parent'>
                <div className='aboutme-details'>
                    <div className="aboutme-details-name">
                            <h2>Sobre Mí</h2>
                            <span>Porque elegirme?</span>
                            <hr/>
                    </div>
                    <div className= 'aboutme-parent-primer'>
                        <div className='aboutme-picture'>
                            <img src={require ('../../assets/Home/stir1.jpg').default} alt='no internet connection' />
                        </div>
                        <div className='aboutme-parent-mural'>
                            <div className='aboutme-p'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero, est natus sint reprehenderit atque odio. Eaque, possimus ad? Earum ipsa asperiores dolorem! Rerum harum dicta repellendus! Error, architecto omnis?</p>
                            </div>
                            <div className='aboutme-container-text'>
                                <div className='aboutme-text'>
                                    <h2>Aquí hay algunos puntos destacados:</h2>
                                    <div>
                                        <span><i class="fa fa-circle"></i>desarrollo web y móvil.</span>
                                    </div>
                                    <div>
                                        <span><i class="fa fa-circle"></i>interfaz interactiva según el diseño.</span>
                                    </div>
                                    <div>
                                        <span><i class="fa fa-circle"></i>react and react native.</span>
                                    </div>
                                    <div>
                                        <span><i class="fa fa-circle"></i>Redux for State Mnanagement.</span>
                                    </div>
                                    <div>
                                        <span><i class="fa fa-circle"></i>Bulilding REST API.</span>
                                    </div>
                                    <div>
                                        <span><i class="fa fa-circle"></i>Managing database.</span>
                                    </div>
                                </div>
                            </div>
                        <div>    
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
