import React from 'react';
//import {Card, Button, Row, Col} from 'react-bootstrap';

import StoreComponent from "../../components/StoreComponent";

function Store({setCarritoAccount, carritoAccount, setProductSelected}) {

    return (
        <StoreComponent setCarritoAccount={setCarritoAccount} carritoAccount={carritoAccount} setProductSelected={setProductSelected}/>
    );
}

export default Store;