import {React, useState} from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import axios from 'axios';



function PizzaList() {
    const [pizzaList, setPizzaList] = useState([]);

    // make axios GET /api/pizza
    const getPizzaList = () => {
        axios.get('/api/pizza').then((response)=>{
            console.log('back from /api/pizza GET with:', response);
            setPizzaList(response.data);
        }).catch ( (err) => {
            console.log( 'ya messed something up!', err);
            alert( 'err' );
        })
    }

    return (<>
        <button type="button" onClick={getPizzaList}>get pizzas</button>
        {pizzaList.map((pizza, id ) => <PizzaItem pizza={pizza} key={pizza.id}/>)}
    </>);
}

export default PizzaList;