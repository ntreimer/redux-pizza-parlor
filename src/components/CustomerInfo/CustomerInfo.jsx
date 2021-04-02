import React from 'react';

function CustomerInfo(){
    return(<>
            <h2>I'm CustomerInfo!</h2>
            <form action="">
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Street Address"/>
                <input type="text" placeholder="City"/>
                <input type="text" placeholder="Zip"/>
                <select name="" id="">
                    <option value="Takeout">Takeout</option>
                    <option value="Delivery">Delivery</option>
                </select>
            </form>
        </>
    )
}

export default CustomerInfo;