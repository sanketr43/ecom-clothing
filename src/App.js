import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import { Route } from 'react-router-dom';

const HatPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/shop/hats" component={HatPage} />
  </div>;
}

export default App;
