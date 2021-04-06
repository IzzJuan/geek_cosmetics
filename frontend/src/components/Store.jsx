import React, {useState, useEffect, /*useRef*/} from 'react';
//import {Card, Button, Row, Col} from 'react-bootstrap';

function Store() {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/products', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                setItems(res);
            })
    }, []
    )

    return (
        <div className="container">
            <div className="row">
                {console.log(items)}
                {items.map((item, index) =>{
                    return(<div className="col-sm">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={item.product_image} alt="product"/>
                            <div className="card-body">
                                <h5 className="card-title">{item.product_name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="/store" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    );
}

export default Store;