import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, } from 'redux';
import { Provider } from 'react-redux';

// const sampleOrder = ['pepperoni pizza', 'Pizza Athena'];
const sampleCustomer = {
    customer_name: 'Sarah',
    street_address: '110 W Grant St',
    city: 'Minneapolis',
    zip: '55403',
    total: 50,
    type: 'Delivery',
    pizzas: 'Pepperoni Pizza' 
}

const checkoutItems = (state=[], action) => {
    if (action.type === 'CHECKOUT_ITEMS') {
        return [...state, action.payload]
    }
    return state;
}


const customerInfo = (state=sampleCustomer, action) => {
    return state;
}

const ourStore = createStore(
    combineReducers(
        {
            checkoutItems: checkoutItems,
            customerInfo: customerInfo
        }
    )
);

ReactDOM.render(
    <Provider store={ourStore}>
        <App />
    </Provider>, document.getElementById('root'));

