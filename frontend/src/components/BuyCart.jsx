import React, {useEffect, useState} from 'react';

//importo router
import {useHistory} from 'react-router-dom';

//importo css
import "./styles/BuyCart.css";

import Modal from './Modal';

function BuyCart({carritoAccount, setCarritoAccount}) {
    const [subtotal, setSubtotal] = useState();
    const [isOpen, setIsOpen] = useState(false);
    let history = useHistory();

    useEffect(() => valor());

    let valor = () =>{
        let subtotals = 0;
        carritoAccount.products.forEach((product)=>{
            subtotals = subtotals + product.product_price *  product.product_amount;
        });
        setSubtotal(subtotals);
    }

    const comprar = () => {
        if(!JSON.parse(localStorage.getItem('user'))){
            history.push('/login');
        } else {
           setIsOpen(true)
        }
    }

    const prueba = () =>{
        setIsOpen(false);
        carritoAccount.products = [];
        carritoAccount.product_quantity = 0;
    }

    return(
        <div className="bigContainer" >
            <div className="row mt-4">
                <div className="col-md-9">
                    <div className="m-3 p-3" style={{background:'#141820', color:'white', borderRadius:'5px'}}>
                        {(carritoAccount.products[0]) ? (
                            <>
                                <div className="dataContainerBuyThing">
                                    <h3 className="text-start">Carrito</h3>
                                </div>
                                <Modal  open={isOpen} onClose={() => prueba()}>
                                    Compra realizada con exito!
                                </Modal>
                                <div className="dataContainerBuyThing">
                                    {
                                        carritoAccount.products.map((product, index) => (
                                            <div key={index}>
                                                <hr/>
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <img src={product.product_image} style={{width:'100%', height:'auto', borderRadius:'14px'}} alt={`Imagen ${product.product_name}`}/>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <div className="d-flex justify-content-between mt-3">
                                                            <h4>
                                                                {product.product_name}
                                                            </h4>
                                                            <h4 style={{fontWeight:'bold'}}>
                                                                Precio: {product.product_price ? product.product_price : 'Sin precio'}
                                                            </h4>
                                                        </div>
                                                        <div className="mt-3 text-start d-flex flex-column">
                                                            <div style={{width:'100%'}}>
                                                                <p>{(product.product_description) ? product.product_description : 'No descripción'}</p>
                                                            </div>
                                                            <div style={{width:'100%'}}>
                                                                <h5><b>Cantidad:</b> {product.product_amount}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <hr/>
                                <div className="dataContainerBuyThing text-end">
                                    <h3>Subtotal: <span>{subtotal}</span></h3>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="dataContainerBuyThing">
                                    <h3 className="text-start">Carrito</h3>
                                </div>
                                <div className="dataContainerBuyThing d-flex flex-column justify-content-center align-items-center">
                                    <h4 className="mt-5">No hay articulos añadidos al carrito.</h4>
                                    <div style={{width:'50%'}}>
                                        <button
                                            className="p-2 btnComprar mt-4"
                                            onClick={() => history.push('/store')}>
                                            Pulsa aquí para ver articulos
                                        </button>
                                    </div>
                                </div>
                                <hr/>
                                <div className="dataContainerBuyThing text-end">
                                    <h3>Subtotal: <span>{subtotal}</span></h3>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="col-md-3" >
                    <div className="m-3 p-3" style={{background:'#141820', borderRadius:'5px'}}>
                        <div className="mb-3 text-start" style={{color:'white'}}>
                            Valor total + IVA: {subtotal+ (subtotal*0.19)}
                        </div>
                        <button onClick={comprar} className="p-2 btnComprar" >
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default  BuyCart;