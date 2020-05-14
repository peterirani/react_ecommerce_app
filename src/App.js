import React from 'react';
import  { Route, Switch } from "react-router-dom";

import './App.css';
import Homepage from "./pages/homepage.component";


const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
)


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/hats' component={HatsPage} />
          </Switch>
      </header>
    </div>
  );
}

export default App;
