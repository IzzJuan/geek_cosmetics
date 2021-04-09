import React, { useState } from "react";
import "./App.css";

//importo pages
import Inicio from "./pages/inicio/index";
import Products from "./pages/products/index";
import Store from "./pages/store/index";
import StoreProduct from "./pages/storeProduct/index";
import Login from "./pages/login/index";
import Register from "./pages/register/index";

//importo componentes
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import BuyCart from "./components/BuyCart";

//importo librerias a usar
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  let user = JSON.parse(localStorage.getItem('user'));
  if(!user){
    user = ''
  }

  const [carritoAccount, setCarritoAccount] = useState({
    product_quantity: 0,
    products: [],
  });
  const [productSelected, setProductSelected] = useState({});

  return (
    <div className="App">
      <Router>
        <Navbar carritoAccount={carritoAccount} />
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/store/product">
            <StoreProduct
              productSelected={productSelected}
              setCarritoAccount={setCarritoAccount}
              carritoAccount={carritoAccount}
            />
          </Route>
          <Route path="/misproductos">
            <Products />
          </Route>
          <Route exact path="/">
            <div className="body-app">
              <Inicio />
            </div>
          </Route>
          <Route path="/store">
            <Store
              setCarritoAccount={setCarritoAccount}
              carritoAccount={carritoAccount}
              setProductSelected={setProductSelected}
            />
          </Route>
          <Route path="/buycart">
            <BuyCart
              setCarritoAccount={setCarritoAccount}
              carritoAccount={carritoAccount}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
