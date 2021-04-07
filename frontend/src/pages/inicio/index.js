import React from 'react';

//importando componentes
import Options from '../../components/Options'

//importando css
import './styles.css'

const Inicio = () => {
    return(
        <div style={{width:'100%'}}>
            <Options />
            <div className="d-flex justfy-content-center align-items-center" style={{height:'100vh', width:'100%'}}>
                <div className="container d-flex flex-column justify-content-center align-items-center" style={{width:'100%', height:'1rem', background:'#282c34'}}>
                    <h3>Desarrollado por: Juan José Garcia Villa</h3>
                </div>
            </div>
        </div>
    )
}

export default Inicio;