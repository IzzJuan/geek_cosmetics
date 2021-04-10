import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
    
    let history = useHistory();
    const [datos, setDatos] = useState({
        "name" : "",
        "lastName" : "",
        "email" : "",
        "password" : "",
        "rpassword" : "",
        "adress" : ''
    });

    const [error, setError] = useState({
        error: false,
        mensaje: ''
    })

    const HandleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const Register = (e) => {
        e.preventDefault()
        if(datos.password !== datos.rpassword){
            setError({
                error: true,
                mensaje: 'Las contraseñas no son iguales'
            })
        } else {
            fetch('http://35.196.233.125:8080/register', {
                method: 'POST',
                body: JSON.stringify({
                    user_name : datos.name,
                    user_lastname : datos.lastName,
                    user_email : datos.email,
                    user_pass : datos.password,
                    user_adress : datos.adress
                }), 
                headers:{
                'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(result => {
                if(result.registered){
                    setError({
                        error: true,
                        mensaje: 'Correo ya registrado'
                    })
                } else if (!result.created) {
                    setError({
                        error: true,
                        mensaje: 'Hubo un error, vuelva a intentarlo'
                    })
                } else {
                    setDatos({
                        "name" : "",
                        "lastName" : "",
                        "email" : "",
                        "password" : "",
                        "rpassword" : "",
                        "adress" : ''
                    })
                    history.push('/login')
                }
            })
            .catch(error => setError({
                error: true,
                mensaje: 'Hubo un error, vuelva a intentarlo'
            }))
        }
        
    }

    return ( 
        <div className="container" style={{paddingTop:'77px', minHeight:'100vh'}}>
            <div className="d-flex flex-column justify-content-center formContainer" style={{borderRadius:'5px', background:'#141820', color:'white'}}>
                <h1 className="mb-4">Bienvenido</h1>
                <form onSubmit={Register} className="mb-3">
                    <div className="inputContainer d-flex mb-4 flex-column justify-content-center">
                        <label className="mb-2" htmlFor="name">Nombre</label>
                        <input id="name" name="name" onChange={(e) => HandleChange(e)} type="text" value={datos.name} required/>
                    </div>
                    <div className="inputContainer d-flex mb-4 flex-column justify-content-center">
                        <label className="mb-2" htmlFor="lastName">Apellidos</label>
                        <input id="lastName" name="lastName" onChange={(e) => HandleChange(e)} type="text" value={datos.lastName} required/>
                    </div>
                    <div className="inputContainer d-flex mb-4 flex-column justify-content-center">
                        <label className="mb-2" htmlFor="email">Correo</label>
                        <input id="email" name="email" onChange={(e) => HandleChange(e)} type="email" value={datos.email} required/>
                    </div>
                    <div className="inputContainer mb-4 d-flex flex-column justify-content-center">
                        <label className="mb-2" htmlFor="password">Contraseña</label>
                        <input id="password" name="password" onChange={(e) => HandleChange(e)} type="password" value={datos.password} required/>
                    </div>
                    <div className="inputContainer mb-4 d-flex flex-column justify-content-center">
                        <label className="mb-2" htmlFor="rpassword">Contraseña de nuevo</label>
                        <input id="rpassword" name="rpassword" onChange={(e) => HandleChange(e)} type="password" value={datos.rpassword} required/>
                    </div>
                    <div className="inputContainer mb-4 d-flex flex-column justify-content-center">
                        <label className="mb-2" htmlFor="adress">Dirección</label>
                        <input id="adress" name="adress" onChange={(e) => HandleChange(e)} type="text" value={datos.adress} required/>
                    </div>
                    {
                        error.error ? (
                            <div className="text-danger mb-3">ERROR: {error.mensaje.toUpperCase()}</div>
                        ) : null
                    }
                    <button onClick={() => history.push('/login')} className="py-2 px-4 m-2" style={{border:'1px solid white', background:'none', borderRadius:'5px', color:'white'}}>Volver</button> 
                    <button className="py-2 px-4" type="submit" style={{border:'1px solid white', background:'none', borderRadius:'5px', color:'white'}}>Registrar</button>
                </form>
            </div>
        </div> 
    );
}
 


export default Register;