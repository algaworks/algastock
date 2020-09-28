import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import ProductsView from '../../views/ProductsView';
import NotFoundView from '../../views/NotFoundView';
import LoginView from '../../views/LoginView';
import ProfileView from '../../views/ProfileView';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/products" />
          </Route>
          <Route path="/products" exact component={ProductsView} />
          <Route path="/login" exact component={LoginView} />
          <Route path="/profile" exact component={ProfileView} />
          <Route component={NotFoundView}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
