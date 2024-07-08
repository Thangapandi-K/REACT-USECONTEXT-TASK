import React, { useContext } from 'react'
import { cartContext } from '../contexts.jsx/CartContext'



const CartComponent = () => {

    //receiving data using useContext
    const { cartData, setCartData } = useContext(cartContext)


    // increase product quantity    
    const addItem = (id, itemQuantity) => {
        setCartData((value) =>{
            return value.map((cart) => {
                if(cart.id === id && (cart.quantity || itemQuantity) < cart.stock) {
                    return {...cart, quantity: (cart.quantity || itemQuantity) + 1};
                } else {
                    return cart;
                }
            })
        })
    }

    //decrease product quantity
    const remItem = (id, itemQuantity) => {
        setCartData((value) =>{
            return value.map((cart) => {
                if(cart.id === id && (cart.quantity || itemQuantity) > 0) {
                    return {...cart, quantity: (cart.quantity || itemQuantity) - 1};
                } else {
                    return cart;
                }
            })
        })
    }

    //remove the product from the cart
    const removeAll = (id) => {
        let removedFromCart = cartData.filter((cart) => cart.id !== id);
        setCartData(removedFromCart);
    } 

  return (
    <>
    <div className='container'>
        <div className='row'>
            {cartData.length === 0 ? (<div className='text-center p-5'>Your Cart Is Empty</div>) : (
                cartData.map((product) => {

                        const price = product.price;
                        const stock = product.stock;

                    return (
                        <div key={product.id}>
                            <div className="card mt-4 bg-body-tertiary shadow bg-light">
                                <div className="row card-body d-flex justify-content-around">
                                    
                                    <div className='col border rounded m-2'>
                                        <img src="dummy.jpg" alt={product.title}/>
                                    </div>
                                    
                                    <div className="col p-3">
                                        <h5 className='card-title'>{product.title}</h5><br/>
                                        <p><b>Brand :</b> {product.brand}</p><br/>
                                        <p><b>Description :</b> {product.description}</p>
                                    </div>
                                    
                                    <div className="col p-3">
                                        <div>
                                            <button className="btn p-2 btn-outline-danger" onClick={()=> remItem(product.id, product.quantity || 0)}>
                                            -
                                            </button>

                                            <span className='px-3'>{product.quantity || 0 }</span>

                                            <button className="btn p-2 btn-outline-success" onClick={()=>addItem(product.id, product.quantity || 0)}>
                                            +
                                            </button>
                                        </div> <br/>
                                        <div>
                                        <span>
                                                {product.quantity == product.stock ? <div className='text-danger fw-bold'><i className="fa-solid fa-face-grin-beam-sweat"></i> Out Of Stock</div> : <div className='text-success fw-bold'><i className="fa-solid fa-face-smile"></i> In Stock : {product.stock - (product.quantity || 0)}</div>}
                                        </span>
                                        </div><br />
                                        <div>
                                            <button className='btn btn-outline-warning' onClick={()=>removeAll(product.id)}>
                                            <i className="fa-solid fa-trash"></i> Remove from cart
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="col fw-bold text-end p-5">
                                        $ {product.price}.00
                                    </div>
                                </div><hr />
                                
                                <div className='row'>
                                    <span className="col text-start p-5">
                                        <p><b><i className="fa-solid fa-cart-plus"></i> Sub-Total :</b></p><br/>
                                        <p><b><i className="fa-solid fa-truck-fast"></i> Shipping :</b></p>
                                    </span>
                                    <span className="col text-end p-5">
                                        <p><b>$ {(product.quantity || 0) * product.price}.00</b></p><br/>
                                        <p><b className='text-success'>FREE</b></p>
                                    </span>
                                </div>
                            </div>
                        </div>  
                    )
                })
            )} 
       </div>
    </div>
    </>
  )
}

export default CartComponent;