import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom'

const StoreProduct = ({productSelected, setCarritoAccount, carritoAccount}) => {
    let history = useHistory();

    useEffect(() => {
        if(productSelected.product_image === undefined){
            history.push('/store');
        }
    })
    return(
        <div>
            <div className="container" style={{paddingTop:'77px', minHeight:'100vh'}}>
                <div className="row" style={{marginTop:'3rem'}}>
                    <div className="col-md-6 p-3">
                        <div className="p-5 d-flex justify-content-center align-items-center" style={{border:'1px solid #E2E2E2', height:'100%', overflow:'hidden'}}>
                            <img src={productSelected.product_image} style={{width:'100%', height:'auto'}} alt={`imagen ${productSelected.product_name}`}/>
                        </div>
                    </div>
                    <div className="col-md-6 p-3">
                        <div className="p-5" style={{background:'#141820', color:'white', height:'100%', overflow:'auto'}} >
                            <h1 className="text-start">{productSelected.product_name} $37000{/*productSelected.product_price*/}</h1>
                            <div className="descriptionContainer">
                                <p className="text-start">Some quick example text to build on the card title and make up the bulk of the card's content.{/*productSelected.product_description*/}{/*productSelected.product_description*/}</p>
                            </div>
                            <div className="buttonProductsContainer">
                                <button className="px-3 py-2 m-2" onClick={() => setCarritoAccount(carritoAccount + 1)} style={{border:'1px solid white', background:'none', color:'white', borderRadius:'7px'}}>Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreProduct;