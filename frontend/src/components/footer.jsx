import React from 'react'

const Footer = () => {
    
    const footerContainer = {
        padding:'1rem',
        background:'black',
        color:'#636363'
    }
    
    return(
        <footer style={footerContainer}>
            @2020 Juan José García Villa – Todos los derechos reservados
        </footer>
    );
}

export default Footer;