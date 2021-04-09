import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./index.css"

const Login = () => {

    const history = useHistory();

    const [datos, setDatos] = useState({
        email:'',
        password:''
    });

    const [error, setError] = useState(false);

    const HandleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify({
                user_email : datos.email,
                user_pass : datos.password
            }), 
            headers:{
              'Content-Type': 'application/json'
            }
        })
        .then(result => result.json())
        .then(res => {
            if(!res.validLogin){
                setDatos({
                    email:'',
                    password:''
                });
                setError(true);
            } else {
                localStorage.setItem('user', JSON.stringify(datos.email))
                history.push('/buycart')
                setDatos({
                    email:'',
                    password:''
                });
            }
            
        })
        .catch(error => console.log(error))
        
    } 

    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <div className="container" style={{paddingTop:'77px', minHeight:'100vh'}}>
            <div className="d-flex flex-column justify-content-center formContainer" style={{borderRadius:'5px', background:'#141820', color:'white'}}>
                <h1 className="mb-4">Bienvenido</h1>
                <form onSubmit={HandleSubmit}>
                    <div className="inputContainer d-flex mb-4 flex-column justify-content-center">
                        <label className="mb-2" htmlFor="email">Digita tu correo</label>
                        <input id="email" name="email" type="email" onChange={handleChange} value={datos.email}/>
                    </div>
                    <div className="inputContainer d-flex flex-column justify-content-center">
                        <label className="mb-2" htmlFor="password">Digita tu contraseña</label>
                        <input id="password" name="password" type="password" onChange={handleChange} value={datos.password}/>
                    </div>
                    {
                        error ? (
                            <div className="text-danger mt-2">ERROR: usuario o contrasñea inválida</div>
                        ) : null
                    }
                    <button className="mt-4 btnEnviar px-3 py-2" >Enviar datos</button>
                    <div className="text-muted mt-2">No estas registrado? registrate presionando <Link to="/register">aquí</Link></div>
                </form>
            </div>
        </div>
     );
}
 
export default Login;