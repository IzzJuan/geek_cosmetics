import './App.css';
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
}

export default App;
