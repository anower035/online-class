import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const subject=props.product;
    const TotalAmount=subject.reduce((TotalAmount,money)=>TotalAmount+money.price,0)
    return (
        <div className='Cart'>
            <h2>Product lists</h2>
            <p>Course Purchased:{subject.length}</p>
            <p>Total Price:{TotalAmount}</p>
        </div>
    );
};

export default Cart;