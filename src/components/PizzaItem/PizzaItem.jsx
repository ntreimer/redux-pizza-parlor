import React from 'react';
import {useDispatch} from 'react-redux';

function PizzaItem(props){
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch({
            type: 'CHECKOUT_ITEMS',
            payload: props.pizza
        })
    }

    return(<>
        <img src={props.pizza.image_path} />
        <h2>{props.pizza.name}</h2>
        <h3>{props.pizza.description}</h3>
        <h3>{props.pizza.price}</h3>
        <button onClick={addToCart}>Add</button>
    </>)
}

export default PizzaItem;