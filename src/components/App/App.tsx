import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import HomeView from '../../views/HomeView';
import NotFoundView from '../../views/NotFoundView';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route component={NotFoundView}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
