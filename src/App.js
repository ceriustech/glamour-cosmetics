import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}

const ShoesPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Shoes Page</h1>
    </div>
  )
}

const ShoesDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>This is shoe item: {props.match.params.shoeId}</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact  path='/hats' component={HatsPage} />
        <Route exact  path='/shoes' component={ShoesPage} />
        <Route exact  path='/shoes/:shoeId' component={ShoesDetail} />
      </Switch>
    </div>
  );
}

export default App;
