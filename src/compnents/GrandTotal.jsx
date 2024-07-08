import React, { useContext } from 'react'
import { cartContext } from '../contexts.jsx/CartContext'

const GrandTotal = () => {

    //receiving data using useContext
    const { cartData } = useContext(cartContext);

    // calculate total amount
    let amount = cartData.reduce((initialValue, cart) => initialValue + cart.price * (cart.quantity || 0), 0);

    //calculate total quantity
    let cartQuantity = cartData.reduce((initialValue, cart) => initialValue + (cart.quantity || 0), 0)

  return (
    <>
        <div>
            <div className='bg-success-subtle fixed-bottom p-4 border border-dark row'>
                <div className='col fs-4'>
                    <b><i className="fa-solid fa-credit-card"></i> Grand Total : ${amount}.00</b>
                </div>
                <div className='col fs-4'><i className="fa-solid fa-cart-shopping"></i> Total Quantity : {cartQuantity}</div>
                <div className="col text-end">
                    <button className='btn btn-primary'> <i className="fa-solid fa-cash-register"></i> Proceed to pay</button>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default GrandTotal