import React, { useState } from 'react'

//importas estilos css
import "./styles.css"

//importar data
import dataJson from "../../data/data.json";

const Products = () => {

    const [data, /*setData*/] = useState(dataJson);
    const [dataSelected, setDataSelected] = useState({
        "id" : data[0].id,
        "nombre" : data[0].nombre,
        "descripcion" : data[0].descripcion,
        "precio" : data[0].precio,
        "url" : data[0].url
    });

    return(
        <div className="container" style={{width:'100%', padding:0}}>
            <div style={{width:'100%', paddingTop:'71px'}}>
                <div className="row mb-5" style={{margin:'0'}}>
                    <div className="col-md-4 productsListSmall" >
                        <div className="eaCeNoWELDiOnTinersenTaTerSidecKSTpAt">
                            <div className="productsListContainer2">
                                <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'27%', background:'#141820', color:'white', borderRadius:'5px'}}>
                                    <h2>Productos</h2>
                                </div>
                                <div className="px-5 py-3" style={{width:'100%', height:'65%', border:'1px solid #E2E2E2'}}>
                                    <div className="d-flex flex-row " style={{height:'100%', overflow:'auto'}}>
                                        <div className="d-flex">
                                            {
                                                data.map((product, index) => (
                                                    <div key={index} className="mx-3" style={{width:'100%', height:'100%', overflow:'hidden', borderRadius:'5px'}}>
                                                        <img src={product.url} alt="una imagen" style={{width:'100px', height:'100px'}} onClick={() => setDataSelected(product)}/>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 py-4">
                        <h1 className="eliminarTitle">Tus Productos</h1>
                        <div className="mt-5 productSelectedContainer">
                            <div className="p-3" style={{width:'100%', background:'none', border:'1px solid #E2E2E2', borderTopLeftRadius:'5px', borderTopRightRadius:'5px'}}>
                                <img src={dataSelected.url} style={{height:'auto', width:'15rem', borderRadius:'5px'}} alt="una imagen"/>
                            </div>
                            <div className="p-3 bodyProductSelected" style={{width:'100%', background:'#141820', borderBottomLeftRadius:'5px', borderBottomRightRadius:'5px'}}>
                                <div className="row" style={{width:'100%', margin:'0', color:'white'}}>
                                    <div className="col-md-6 d-flex flex-column justify-content-between" style={{margin:'0'}}>
                                        <div className="mb-3" style={{width:'100%'}}>
                                            <p className="featureProduct " >Nombre: {dataSelected.nombre}</p>
                                        </div>
                                        <div style={{width:'100%'}}>
                                            <p className="featureProduct " >Descripción: {dataSelected.descripcion}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex flex-column justify-content-between">
                                        <div className="col-sm-6" style={{width:'100%', height:'50%'}}>
                                            <p className="featureProduct2" ><b>Precio: {dataSelected.precio}</b></p>
                                        </div>
                                        <div className="col-sm-6" style={{width:'100%', height:'50%'}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 productsListBig" >
                        <div className="CiNGuitREdIeROnEtoNvEbeaTChaNSPORtESNeWa">
                            <div className="productsListContainer">
                                <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'17%', background:'#141820', color:'white', borderRadius:'5px'}}>
                                    <h2>Productos</h2>
                                </div>
                                <div className="px-5 py-3" style={{width:'100%', height:'83%', border:'1px solid #E2E2E2'}}>
                                    <div className="d-flex flex-column " style={{height:'100%', overflow:'auto'}}>
                                        <div>
                                            {
                                                data.map(product => (
                                                    <div key={product.id} className="my-3" style={{width:'100%', height:'26%', overflow:'hidden', borderRadius:'5px'}}>
                                                        <img src={product.url} alt="una imagen" style={{width:'100px', height:'100px'}} onClick={() => setDataSelected(product)}/>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products