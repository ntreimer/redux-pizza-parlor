import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

function Checkout(){

    const checkoutItems = useSelector(( store )=>{
        return store.checkoutItems;
    })
    
    return(
        <>
            <h2>Checkout</h2>
            {checkoutItems.map((pizza, id ) => {
                return ([
                    <img src={pizza.image_path}/>,
                    <h2>{pizza.name}</h2>,
                    <h3>{pizza.description}</h3>,
                    <h3>{pizza.price}</h3>
                ])
            }
                
            )}       
        </>
    )
}

export default Checkout;