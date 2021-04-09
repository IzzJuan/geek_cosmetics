import React, {useState, useEffect, /*useRef*/} from 'react';

function StoreComponent({setCarritoAccount, carritoAccount}) {

    const [items, setItems] = useState([]);

    useEffect(() => {
            fetch('http://localhost:8080/products', {
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    setItems(res);
                })
        }, []
    )

    const submitHandler = (item) => {

            if (carritoAccount.products.find(({id}) => id === item.id)){
                carritoAccount.products.forEach((product) =>{

                    if (product.id === item.id){
                        item.product_amount = product.product_amount+1;
                    }
                })
                
                setCarritoAccount({
                    product_quantity: carritoAccount.product_quantity,
                    products: [...carritoAccount.products.filter(product => product.id !== item.id), item]
                })
                console.log(carritoAccount.products)

            }
            else {
                setCarritoAccount({
                    product_quantity: carritoAccount.product_quantity + 1,
                    products: [...carritoAccount.products, item]
                })

            }
    }

    return (
        <div className="container" style={{paddingTop: '77px'}}>
            <div className="row my-2">
                {items.map((item, index) => {
                    return (
                        <div key={index} className="col-sm py-4 d-flex justify-content-center align-items-center">
                            <div className="card " style={{width: "18rem", height: '100%', cursor: 'pointer'}}>
                                <div className="p-4 d-flex justify-content-center aling-items-center"
                                     style={{height: '46vh', overflow: 'hidden'}}>
                                    <img className="card-img-top img-fluid" src={item.product_image} alt="product"
                                         style={{height: 'auto', width: '100%'}}/>
                                </div>
                                <div className="card-body d-flex flex-column justify-content-between"
                                     style={{height: '34vh', background: '#141820', color: 'white'}}>
                                    <h5 className="card-title"
                                        style={{margin: '0', userSelect: 'none'}}>{item.product_name}</h5>
                                    <p className="card-text" style={{
                                        margin: '0',
                                        display: 'inline-block',
                                        overflow: 'hidden',
                                        fontSize: '13px',
                                        userSelect: 'none'
                                    }}>Some quick example text to build on the card title and make up
                                        the bulk of the card's content.</p> <span className="my-2"
                                                                                  style={{color: '#158BED'}}>Ver más...</span>
                                    <button onClick={() => submitHandler(item)} className="btn btn-primary"
                                            style={{border: '1px solid white', background: 'none'}}>Añadir al carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default StoreComponent;