import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import home from './views/home';
import about from './views/about';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Route path="/" exact component={home}></Route>
                <Route path="/about" component={about}></Route>
            </div>
        </Router>
    );
  }
}

export default App;
