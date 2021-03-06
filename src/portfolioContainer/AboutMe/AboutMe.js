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
                                <p>Mi vida como desarrollador empezó cuando tuve interés por las computo,  inicie a estudiar desarrollo web me intereso más y  estudie mas tecnología para mis proyecto para hacerlo más profesional.</p>
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
