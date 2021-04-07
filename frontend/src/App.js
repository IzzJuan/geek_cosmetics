import React from 'react'
import './App.css';

//importo pages
import Inicio from './pages/inicio/index'
import Products from './pages/products/index'

//importo componentes
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Store from './components/Store'


//importo librerias a usar
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/misproductos">
              <Products />
          </Route>
          <Route exact path="/">
            <div className="body-app" >
              <Inicio />
            </div>
          </Route>
          <Route path="/store">
              <Store/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
