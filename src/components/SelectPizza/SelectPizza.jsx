import React from 'react';
import PizzaList from '../PizzaList/PizzaList';
import {useHistory} from 'react-router-dom';

function SelectPizza() {
    const history = useHistory();
    const newPage = () => {
        console.log('newPage ran');
        history.push('/customerInfo');
    }
    return (<>
        <img src='images/pizza_photo.png' />
        <p>Pizza is great. Pick one!</p>
        <PizzaList />
        <button type="button" onClick={newPage}>Next</button>
    </>);
}

export default SelectPizza;