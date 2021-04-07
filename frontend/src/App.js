import React from 'react'
import './App.css';
<<<<<<< HEAD
import {BrowserRouter as Router, Route, Switch, /*Link*/} from 'react-router-dom';
import Store from './components/Store'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/' render={() => {
                        return <header className="App-header">
                            <p>
                                Edit <code>src/App.js</code> and save to reload.
                            </p>
                            <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React
                            </a>
                        </header>
                    }}/>
                    <Route path='/store' component={Store}/>
                </Switch>
            </Router>
        </div>
    );
=======

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
>>>>>>> main
}

export default App;
