import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
           <h3>this is menu</h3>
                <p>Selected items:{cart.length}</p>
        </div>
    );
};

export default Cart;