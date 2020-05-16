import React from 'react';
import  { Route, Switch } from "react-router-dom";

import './App.css';
import Homepage from "./pages/homepage.component";
import Shoppage from "./pages/shop/shop.component";


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
              <Route  path='/shop' component={Shoppage} />
              <Route  path='/hats' component={HatsPage} />
              <Route  path='/' component={Homepage} />
          </Switch>
      </header>
    </div>
  );
}

export default App;
