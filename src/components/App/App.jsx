import React from 'react';
import axios from 'axios';
import './App.css';
import SelectPizza from '../SelectPizza/SelectPizza';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Checkout from '../Checkout/Checkout';
import Admin from '../Admin/Admin';

import {HashRouter as Router, Link, Route, useHistory} from 'react-router-dom';


function App() {
  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Router>
        <Route path="/" exact>
		      <SelectPizza />
	      </Route>
	      <Route path="/customerInfo" exact>
		      <CustomerInfo />
	      </Route>
	      <Route path="/checkout" exact>
		      <Checkout />
	      </Route>
	      <Route path="/admin" exact>
		      <Admin />
	      </Route>
      </Router>
    </div>
  );
}

export default App;
