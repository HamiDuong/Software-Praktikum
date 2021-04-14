import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Redirect,Switch} from "react-router-dom";


const routes =(
  <BrowserRouter>
  <Switch>
    <Route path="/matchmaking" component={App}/>
    <Redirect from ="/" to="/matchmaking"/>
  </Switch>
  
  </BrowserRouter>
)



ReactDOM.render(
  routes,
  document.getElementById('root')
);

