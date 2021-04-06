import React from 'react'
import './App.css';

//importo pages
import Inicio from './pages/inicio'

//importo componentes
import Navbar from './components/Navbar'
import Footer from './components/footer'

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
          <Route path="/">
            <div className="body-app" >
              <Inicio />
            </div>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
