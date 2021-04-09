import React from 'react';

//import css
import "./styles/Options.css"

//importando imagenes
import fondo from '../images/imagenLibros.jpeg'

//importo enrutador
import {
    Link
} from "react-router-dom";

const Options = () => {
    return(
        <div className="d-flex justify-content-center align-items-center" style={{width:'auto', height:'100vh', margin:'0px', padding:'0px 10%'}}>
            <img src={fondo} alt="" style={{position:'absolute', width:'100%', height:'100vh', opacity:'0.5', overflow:'hidden'}}/>
            <div className="d-flex justify-content-between align-items-center row" style={{width:'100%', zIndex:'1'}}>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="title-bienvenidos" style={{fontSize:'45px', userSelect:'none'}}>¡Bienvenidos!</h1>
                    <p style={{fontSize:'18px', userSelect:'none'}}>{`¡No te pierdas de nuestros increibles productos!`.toUpperCase()}</p>
                </div>
                <div className="col-md-6" >
                    <div className="d-flex flex-column align-items-center containerButtons" style={{marginLeft:'1rem'}}>
                        <Link to="/store" style={{color:'white', textDecoration:'none'}}>
                        <div className="my-2 d-flex justify-content-center align-items-center linksInicio" style={{width:'15rem', height:'3rem', border:'1px solid white'}}>
                            ¡Comprar YA!
                        </div>
                        </Link>
                        <Link to="/misproductos" style={{color:'white', textDecoration:'none'}}> 
                            <div className="my-2 d-flex justify-content-center align-items-center linksInicio" style={{width:'15rem', height:'3rem', border:'1px solid white'}}>
                                Tus productos
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Options;